/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check

const { response, fetchFromSanity, loadDoc, sanitizeString, isBadArray } = require('./util');

const fetchMembership = async () =>
  fetchFromSanity(`{ Membership(id: "membership") { _id categories { name }} }`);

const validateMembershipData = ({ categories }) => {
  if (!categories) return response(422, 'Payload is broken: Missing Categories');

  if (isBadArray(categories) || !categories[0].name)
    return response(422, 'Payload is broken: Misformed Categories');
};

const updateMembership = async ({ categories }) => {
  try {
    const sheet = (await loadDoc()).sheetsByTitle.Membership;
    if (!sheet) return response(409, `There is no Membership sheet`);

    await sheet.loadHeaderRow();
    const oldHeaderValues = sheet.headerValues;

    const newCategories = categories
      .map(({ name }) => sanitizeString(name))
      .filter(c => !oldHeaderValues.includes(c));

    await sheet.setHeaderRow([...oldHeaderValues, ...newCategories]);

    return response(200, `Membership sheet updated`);
  } catch (err) {
    console.error('error ocurred while trying to update membership');
    console.error(err);
    return response(500, err.toString());
  }
};

exports.handleMembershipUpdate = async () => {
  const responseData = (await fetchMembership()).data.Membership;

  const error = validateMembershipData(responseData);
  if (!!error) return error;

  return await updateMembership(responseData);
};
