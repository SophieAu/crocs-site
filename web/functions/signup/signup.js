/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check

const { sanitizeString } = require('../check-sanity-update/util');
const { setup, loadDoc, response } = require('./util');

setup(
  'GOOGLE_SERVICE_ACCOUNT_EMAIL',
  'GOOGLE_PRIVATE_KEY',
  'GOOGLE_SPREADSHEET_ID_FROM_URL',
  'GATSBY_SANITY_PROJECT_ID',
  'GATSBY_SANITY_DATASET'
);

/*
--- BODY DATA
  id: string;
  name: string,
  email: string,
  [category]: number
  paid: boolean
*/

const BASE_FIELDS = ['id', 'name', 'email', 'paid', 'botField'];

const validateSignupData = data => {
  if (!!data.botField) return response(403, 'You look like a bot');

  const keys = Object.keys(data);
  if (BASE_FIELDS.some(f => !keys.includes(f)))
    return response(422, 'Payload is broken: Base Fields Missing');
};

const sanitizeSignupData = data => {
  const id = sanitizeString(data.id);
  const name = encodeURI(data.name)
    .replace('%20', ' ')
    .replace(/[`~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  const email = encodeURI(data.email).replace(/[`~!#$%^&*()|=?;:'",<>\{\}\[\]\\\/]/gi, '');
  const paid = data.paid === true || data.paid === "true";

  const rawCategories = Object.keys(data).filter(k => !BASE_FIELDS.includes(k));
  const categories = {};
  rawCategories.forEach(c => {
    const amount = parseInt(data[c], 10);
    if (isNaN(amount)) return;

    categories[c] = amount;
  });

  return { id, name, email, paid, ...categories };
};

exports.handler = async event => {
  if (event.httpMethod === 'OPTIONS') return response(200, '');
  if (event.httpMethod !== 'POST') {
    console.log('405 - HTTP Method was: ', event.httpMethod);
    return response(405, 'HTTP Method must be POST or OPTIONS');
  }

  try {
    const data = JSON.parse(event.body);
    const error = validateSignupData(data);
    if (!!error) return error;

    const { id, name, email, paid, ...categories } = sanitizeSignupData(data);

    const sheets = (await loadDoc()).sheetsByTitle;
    const sheetTitle = Object.keys(sheets).find(title => title.includes(id));
    const sheet = sheets[sheetTitle];
    if (!sheet) return response(412, `Sheet with id '${id}' doesn't exist`);

    const { _rowNumber } = await sheet.addRow({
      Timestamp: new Date().toISOString(),
      Name: name,
      Email: email,
      Paid: paid,
      ...categories,
    });

    return response(200, `Signup for ${sheetTitle} successful. ID ${_rowNumber - 1}`);
  } catch (err) {
    console.error('error ocurred in processing ', event);
    console.error(err);
    return { statusCode: 500, body: err.toString() };
  }
};
