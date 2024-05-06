import { apolloClient } from '@/api/apollo-client';
import {
  AdminGetMeQuery,
  AdminLoginQuery,
  AdminLoginQueryVariables,
} from '@/types/sdk';
import AdminLoginQueryGql from '@/graphql/adminLogin.gql';
import AdminGetMeQueryGql from '@/graphql/adminGetMe.gql';
import { JWT_ADMIN_TOKEN } from '@/constans';

// console.log(AdminLoginQueryGql);

const authProvider = {
  login: async (variables: AdminLoginQueryVariables) => {
    const { data } = await apolloClient.query<
      AdminLoginQuery,
      AdminLoginQueryVariables
    >({
      query: AdminLoginQueryGql,
      variables,
    });

    if (!data.adminLogin?.accessToken) {
      return Promise.reject();
    }

    localStorage.setItem(JWT_ADMIN_TOKEN, data.adminLogin?.accessToken);
  },
  logout: () => {
    localStorage.removeItem(JWT_ADMIN_TOKEN);
    return Promise.resolve();
  },
  checkAuth: () => {
    if (!localStorage.getItem(JWT_ADMIN_TOKEN)) {
      return Promise.reject();
    }

    return Promise.resolve();
  },
  checkError: (error: any) => {
    return Promise.resolve();
  },
  getIdentity: async () => {
    const { data } = await apolloClient.query<AdminGetMeQuery>({
      query: AdminGetMeQueryGql,
    });

    return Promise.resolve({
      id: data.adminGetMe!.id,
      fullName: data.adminGetMe!.username,
    });
  },
  getPermissions: () => Promise.resolve(''),
};

export default authProvider;
