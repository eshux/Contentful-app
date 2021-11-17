import { gql } from '@apollo/client';
import { TAG_FRAGMENT } from './fragments/TagFragment';

export const GET_ARTICLE_BY_SLUG = gql`
  ${TAG_FRAGMENT}
  query GetArticleBySlug($locale: String = "en-US", $preview: Boolean = false, $slug: String!) {
    articleCollection(limit: 1, preview: $preview, locale: $locale, where: {slug: $slug}) {
      items {
        title
        content {
          json
          links {
            entries {
              hyperlink {
                sys {
                  id
                }
                ... on Article {
                  slug
                }
              }
            }
            assets {
              block {
                sys {
                  id
                }
                url
                description
              }
              hyperlink {
                sys {
                  id
                }
                url
              }
            }
          }
        }  
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
