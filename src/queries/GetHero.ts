import { gql } from '@apollo/client';

export const GET_HERO = gql`
  query GetHero($locale: String = "en-US", $preview: Boolean = false) {
    heroCollection(locale: $locale, preview: $preview) {
      items {
        sys {
          id
        }
        image {
          description
          url
        }
        title
        description
      }
    }
  }
`;