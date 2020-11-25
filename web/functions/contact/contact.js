/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check

const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const sendMail = require('sendmail')({});

function setup(...params) {
  if (!process.env.NETLIFY) require('dotenv').config();

  function error(key) {
    console.error(`no ${key} env var set`);

    const error = new Error(`invalid server-side configuration`);
    error.stack = '';
    throw error;
  }

  params.forEach(p => !process.env[p] && error(p));
}

setup('CONTACT_EMAIL');

const response = (code, message) => ({
  statusCode: code,
  body: !!message ? JSON.stringify({ message }) : undefined,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Max-Age': 2592000,
    'Access-Control-Allow-Credentials': true,
  },
});

/*
--- BODY DATA
  name: string;
  email: string,
  subject: string,
  body: string,
*/

exports.handler = event => {
  if (event.httpMethod === 'OPTIONS') return response(200, '');
  if (event.httpMethod !== 'POST') {
    console.log('405 - HTTP Method was: ', event.httpMethod);
    return response(405, 'HTTP Method must be POST or OPTIONS');
  }

  try {
    const data = JSON.parse(event.body);
    if (!!data.botField) return response(403, 'You look like a bot');

    if (!data.name || !data.email || !data.subject || !data.body)
      return response(422, 'Payload is broken: Empty fields');
    if (!EMAIL_REGEX.test(data.email)) return response(422, 'Payload is broken: Invalid email');

    const mail = {
      from: `"${data.name}" <${data.email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: data.subject,
      text: data.body,
    };
    const callback = e => {
      console.log('maybe e: ', e);
      if (e) throw e;
    };

    sendMail(mail, callback);
    return response(200, '');
  } catch (err) {
    console.error('error ocurred in processing ', event);
    console.error(err);
    return { statusCode: 500, body: err.toString() };
  }
};
