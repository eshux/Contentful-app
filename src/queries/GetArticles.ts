import { gql } from '@apollo/client';
import { TAG_FRAGMENT } from './fragments/TagFragment';

export const GET_ARTICLES = gql`
  ${TAG_FRAGMENT}
  query GetArticles($locale: String = "en-US", $tags: [String]) {
    articleCollection(locale: $locale, where: {contentfulMetadata: {tags: {id_contains_some: $tags}}}) {
      items {
        sys {
          id
        }
        title
        description{
          json
        }  
        tagCollection(limit: 5) {
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
