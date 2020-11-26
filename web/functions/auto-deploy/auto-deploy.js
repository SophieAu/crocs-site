/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check

require('isomorphic-fetch');

const HOOK_ENDPOINT = 'https://api.netlify.com/build_hooks/5f41658fc86c105b4cdfb007';

const htmlResponse = (statusCode, body) => ({ statusCode, body });

exports.handler = async event => {
  if (event.httpMethod !== 'POST') return htmlResponse(405, 'HTTP Method must be POST');

  try {
    const { all } = JSON.parse(event.body).ids;
    if (all.length === 0) return htmlResponse(200, 'No Updates');

    const response = await fetch(HOOK_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{}',
    });
    if (!response.ok) return htmlResponse(500, 'Could not trigger re-deploy');

    return htmlResponse(200, 'Redeploy triggered');
  } catch (err) {
    console.error('error ocurred in processing ', event);
    console.error(err);
    return htmlResponse(500, err.toString());
  }
};
