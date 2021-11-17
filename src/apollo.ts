import { ApolloClient, InMemoryCache } from "@apollo/client";
import { SPACE_ID, CDA_ACCESS_TOKEN, CPA_ACCESS_TOKEN } from './config/config';

export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          articleCollection: {
            // keyArgs: false,
            // merge(existing, incoming) {
            //   if (!incoming) return existing
            //   if (!existing) return incoming
            //   const { items, ...rest } = incoming;
            //   let result = rest;
            //   result.items = [...existing.items, ...items];
            //   return result
            // }
          }
        },
      },
    },
  }),
  uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
  headers: {
    'Authorization': `Bearer ${process.env.NODE_ENV === 'development' ? CPA_ACCESS_TOKEN : CDA_ACCESS_TOKEN}`,
  },
});