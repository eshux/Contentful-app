import { gql } from '@apollo/client';

export const GET_HERO = gql`
  query GetHero($locale: String = "en-US") {
    heroCollection(locale: $locale) {
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