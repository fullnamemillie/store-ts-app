import { getTokenData, HASURA_CLAIMS, HASURA_USER_ID } from './jwt';
import { api } from './api';
import { GetAdminByIdQuery } from './sdk';

export const getAdminFromHeaders = async (
  headers
): Promise<GetAdminByIdQuery> => {
  const authHeaders = headers['authorization'];

  if (!authHeaders) {
    throw new Error(
      JSON.stringify({
        statusCode: 403,
        body: JSON.stringify({
          message: 'Forbidden',
        }),
      })
    );
  }

  const [_, authToken] = authHeaders.split(' ');
  const adminObj = getTokenData(authToken);
  const adminId = adminObj[HASURA_CLAIMS][HASURA_USER_ID];

  const data = await api.GetAdminById(
    { id: adminId },
    {
      'x-hasura-admin-secret': 'myadminsecretkey',
    }
  );

  return data;
};
