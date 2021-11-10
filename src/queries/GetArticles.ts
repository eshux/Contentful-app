import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
  query GetArticles($locale:String="en-US") {
    articleCollection(locale: $locale) {
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
