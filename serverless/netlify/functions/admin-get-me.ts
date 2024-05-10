import { getAdminFromHeaders } from './../common/getAdminFromHeaders';
import { Handler } from '@netlify/functions';
import { HASURA_CLAIMS, HASURA_USER_ID, getTokenData } from '../common/jwt';
import { api } from '../common/api';
import { GetAdminByIdQuery } from '../common/sdk';

const handler: Handler = async (event, context) => {
  const { headers } = event;

  let admin: GetAdminByIdQuery;

  try {
    admin = await getAdminFromHeaders(headers);
  } catch (e) {
    return JSON.parse(e.messege);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      id: admin.admin_by_pk?.id,
      username: admin.admin_by_pk?.username,
    }),
  };
};

export { handler };
