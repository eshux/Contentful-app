import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
  query GetArticles {
    articleCollection {
      items {
        sys {
          id
        }
        title
        description{
          json
        }  
        tagCollection{
          items {
            sys {
              id
            }
            name
          }
        }
        image {
          url
          description
        }
      }
    }
  }
`;
