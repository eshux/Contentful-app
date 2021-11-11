import { gql } from '@apollo/client';
import { TAG_FRAGMENT } from './fragments/TagFragment';

export const GET_ARTICLES = gql`
  ${TAG_FRAGMENT}
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
            ...TagFragment
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
