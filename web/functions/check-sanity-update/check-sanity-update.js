/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check

const { handleEventCreations, handleEventUpdates } = require('./event-handling');
const { handleMembershipUpdate } = require('./membership-handling');
const { htmlResponse, setup } = require('./util');

setup(
  'GOOGLE_SERVICE_ACCOUNT_EMAIL',
  'GOOGLE_PRIVATE_KEY',
  'GOOGLE_SPREADSHEET_ID_FROM_URL',
  'GATSBY_SANITY_PROJECT_ID',
  'GATSBY_SANITY_DATASET'
);

exports.handler = async event => {
  if (event.httpMethod !== 'POST') return htmlResponse(405, 'HTTP Method must be POST');

  const responses = [];

  try {
    const { created, updated } = JSON.parse(event.body).ids;

    if (created.length !== 0) {
      console.log('New Events: ', JSON.stringify(created));
      responses.push(...(await handleEventCreations(created)));
    }

    if (updated.length !== 0) {
      console.log('Updated Events: ', JSON.stringify(updated));
      responses.push(...(await handleEventUpdates(updated)));
    }

    if (updated.includes('membership')) {
      console.log('Updating Membership');
      responses.push(await handleMembershipUpdate());
    }

    const hasError = responses.some(r => r.code !== 200);
    const hasSuccess = responses.some(r => r.code === 200);

    if (hasError && !hasSuccess) return htmlResponse(422, JSON.stringify(responses));
    if (hasError && hasSuccess) return htmlResponse(207, JSON.stringify(responses));
    if (!hasError && hasSuccess) return htmlResponse(200, JSON.stringify(responses));

    return htmlResponse(200, 'No Updates');
  } catch (err) {
    console.error('error ocurred in processing ', event);
    console.error(err);
    return { statusCode: 500, body: err.toString() };
  }
};
