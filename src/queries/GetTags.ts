import { gql } from '@apollo/client';
import { TAG_FRAGMENT } from './fragments/TagFragment';

export const GET_TAGS = gql`
  ${TAG_FRAGMENT}
  query GetTags($locale: String = "en-US") {
    tagCollection(locale: $locale) {
      items {
        ...TagFragment
      }
    }
  }
`;
