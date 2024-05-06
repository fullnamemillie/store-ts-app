import { getSdk } from '../common/sdk';
import { GraphQLClient } from 'graphql-request';

export const api = getSdk(
  new GraphQLClient('http://localhost:8080/v1/graphql')
);
