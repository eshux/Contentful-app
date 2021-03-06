import { gql } from '@apollo/client';
import { TAG_FRAGMENT } from './fragments/TagFragment';

export const GET_ARTICLES = gql`
  ${TAG_FRAGMENT}
  query GetArticles($skip: Int, $limit: Int, $locale: String = "en-US", $tags: [String], $preview: Boolean = false) {
    articleCollection(preview: $preview, skip: $skip, limit: $limit, locale: $locale, where: {contentfulMetadata: {tags: {id_contains_some: $tags}}}) {
      total
      skip
      items {
        slug
        title
        shortDescription
        tagCollection {
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
