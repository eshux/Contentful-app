export const blogQuery = (lang: string) => {
  return (
    `query($isPreview: Boolean=false) {
      blogPostCollection(locale: "${lang}", limit: 10, preview: $isPreview) {
        items {
          sys {
            id
          }
          title
          introText
          mainImage {
            title
            description 
            url
          }
          tagsCollection {
            items {
              name
            }
          }
          textCollection {
            items {
              title
              text {
                json
              }
            }
          }
          imageTextCollection {
            items {
              title
              text {
                json
              }
              image {
                ...imageField
              }
            }
          }
          imageCollection {
            items {
              ...imageField
            }
          }
        }
      }
    }

    fragment imageField on ImageWithDescription {
      title
      description
    }`
  )
}