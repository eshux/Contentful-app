export const getBlogPostById = () => {
  return (
    `query($isPreview: Boolean=false, $lang: String="en-US", $id: String!) {
      blogPost(locale: $lang, preview: $isPreview, id: $id) {
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
            sys {
              id
            }
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

    fragment imageField on ImageWithDescription {
      title
      description
    }`
  )
}