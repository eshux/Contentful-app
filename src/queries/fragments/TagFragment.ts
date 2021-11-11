import { gql } from '@apollo/client';

export const TAG_FRAGMENT = gql`
  fragment TagFragment on Tag {
    contentfulMetadata {
      tags {
        id
      }
    }
    name
  }
`;
