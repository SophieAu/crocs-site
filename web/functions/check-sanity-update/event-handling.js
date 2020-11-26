/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check

const { response, fetchFromSanity, loadDoc, sanitizeString, isBadArray } = require('./util');

const EXCLUDED_IDS = ['membership', 'about', 'homepage', 'men', 'events', 'siteSettings', 'ladies'];

const fetchEvent = async id =>
  fetchFromSanity(`{ Event(id: "${id}") { _id name startTime tickets { name }} }`);

const validateEventData = ({ _id, name, startTime, tickets }) => {
  if (!_id || !name || !startTime) return response(422, 'Payload is broken: Missing Fields');

  if (!!tickets && (isBadArray(tickets) || !tickets[0].name))
    return response(422, 'Payload is broken: Misformed Ticket Categories');

  if (isNaN(Date.parse(startTime))) return response(422, 'Payload is broken: Invalid Date');
};

const handleEvents = async (ids, handler) => {
  const cleanIds = ids.filter(id => !EXCLUDED_IDS.includes(id));

  const responseData = await Promise.all(cleanIds.map(async id => await fetchEvent(id)));
  const cleanResponseData = responseData
    .filter(Boolean)
    .map(({ data }) => ({ ...data.Event, _id: data.Event._id.split('-')[0] }))
    .filter(Boolean);

  const handlerResponses = await Promise.all(
    cleanResponseData.map(async data => {
      const error = validateEventData(data);
      if (!!error) return error;

      return await handler(data);
    })
  );

  return handlerResponses;
};

const sanitizeEventData = ({ _id, name, startTime, tickets }) => ({
  id: _id.replace(/[^a-zA-Z0-9]/g, ''),
  date: new Date(startTime).toISOString().split('T')[0],
  title: sanitizeString(name),
  tickets: (tickets || []).map(({ name }) => sanitizeString(name)),
});

const buildEventTitle = ({ id, title, date }) => `${date} ${title} (${id})`;

const updateEvent = async data => {
  const { id, date, title, tickets } = sanitizeEventData(data);

  try {
    const sheets = (await loadDoc()).sheetsByTitle;

    const oldTitle = Object.keys(sheets).find(sheet => sheet.includes(`(${id})`));
    if (!oldTitle) return response(409, `Sheet for event with id ${id} does not exist yet.`);

    const sheet = sheets[oldTitle];
    await sheet.loadHeaderRow();
    const oldHeaderValues = sheet.headerValues;

    const newTitle = buildEventTitle({ id, title, date });
    const newCategories = tickets.filter(c => !oldHeaderValues.includes(c));

    await sheet.updateProperties({ title: newTitle });
    await sheet.setHeaderRow([...oldHeaderValues, ...newCategories]);

    return response(200, `Sheet for event updated: ${newTitle}`);
  } catch (err) {
    console.error('error ocurred while trying to update event');
    console.error(err);
    return response(500, err.toString());
  }
};

const createEvent = async data => {
  const { id, date, title, tickets } = sanitizeEventData(data);

  try {
    const doc = await loadDoc();

    const sheetTitle = buildEventTitle({ id, title, date });
    if (!!doc.sheetsByTitle[sheetTitle])
      return response(409, `Sheet for event '${sheetTitle}' already exists.`);

    const sheet = await doc.addSheet({
      headerValues: ['Timestamp', 'Name', 'Email', ...tickets, 'Paid'],
      title: sheetTitle,
    });

    return response(200, `Sheet for event created: ${sheet.title}`);
  } catch (err) {
    console.error('error ocurred while trying to create event');
    console.error(err);
    return response(500, err.toString());
  }
};

exports.handleEventUpdates = async ids => handleEvents(ids, updateEvent);
exports.handleEventCreations = async ids => handleEvents(ids, createEvent);
