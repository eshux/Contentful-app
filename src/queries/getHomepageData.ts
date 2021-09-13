export const getHomepageData = (lang: string) => {
  return (
    `query($isPreview: Boolean=false) {
      headerCollection {
        items {
          title(locale: "${lang}")
          logo {
            url
            title
          }
        }
      }
      personCollection(preview: $isPreview) {
        items{
          name
          linkedin
          facebook
          bio(locale: "${lang}") {
            json
          }
          image{
            url
            title
          }
        }
      }
      bookmarkCollection {
        items {
          ...bookmarkFields
        }
      }
      favoriteTag: tagCollection(where: {name_contains: "favorite"}, limit: 1) {
        items {
          name
          linkedFrom {
            bookmarkCollection {
              items {
                ...bookmarkFields
              }
            }
          }
        }
      }
    }

    fragment bookmarkFields on Bookmark {
      sys {
        id
      }
      title(locale: "${lang}")
      url
      description(locale: "${lang}")
      tagCollection(limit: 10) {
        items {
          name
          sys {
            id
          }
        }
      }
    }`
  )
}