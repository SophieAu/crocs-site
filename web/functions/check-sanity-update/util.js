/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check

const { GoogleSpreadsheet } = require('google-spreadsheet');
require('isomorphic-fetch');

const API_ENDPOINT = `https://${process.env.GATSBY_SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/${process.env.GATSBY_SANITY_DATASET}/default`;

exports.htmlResponse = (code, message) => ({
  statusCode: code,
  body: !!message ? JSON.stringify({ message }) : undefined,
});

exports.response = (code, message) => ({ code, message });

exports.fetchFromSanity = async query => {
  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  return response.json();
};

exports.setup = (...params) => {
  if (!process.env.NETLIFY) require('dotenv').config();

  function error(key) {
    console.error(`no ${key} env var set`);

    const error = new Error(`invalid server-side configuration`);
    error.stack = '';
    throw error;
  }

  params.forEach(p => !process.env[p] && error(p));
};

exports.loadDoc = async () => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID_FROM_URL);
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  });
  await doc.loadInfo();

  return doc;
};

exports.sanitizeString = s => s.toString().replace(/[^a-zA-Z0-9\s]/g, '');

exports.isBadArray = arr => {
  const notAnArray = !Array.isArray(arr) || arr instanceof String;
  const emptyArray = arr.length === 0;

  return notAnArray || emptyArray;
};
