import { ApolloClient, InMemoryCache } from "@apollo/client";
import { SPACE_ID, CDA_ACCESS_TOKEN } from './config/config';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
  headers: {
    'Authorization': `Bearer ${CDA_ACCESS_TOKEN}`,
  },
});