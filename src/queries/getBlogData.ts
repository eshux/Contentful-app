export const getBlogData = () => {
  return (
    `query($isPreview: Boolean=false, $lang: String="en-US", $tags: [String]=null) {
       filteredByTags: tagCollection(where: {sys: {id_in: $tags}}, limit: 10) {
        items {
          name
          linkedFrom {
            blogPostCollection(limit: 10, preview: $isPreview) {
              items {
                ...allBlogPosts
              }
            }
          }
        }
      }
      blogPostCollection(limit: 10, preview: $isPreview) {
        items {
          ...allBlogPosts
        }
      }
    }

    fragment allBlogPosts on BlogPost {
      sys {
        id
      }
      title(locale: $lang)
      introText(locale: $lang)
      mainImage(locale: $lang) {
        title
        description 
        url
      }
      tagsCollection(locale: $lang, limit: 5) {
        items {
          name
          sys {
            id
          }
        }
      }
      textCollection(locale: $lang, limit: 4) {
        items {
          title
          text {
            json
          }
        }
      }
      imageTextCollection(locale: $lang, limit: 2) {
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
      imageCollection(locale: $lang, limit: 4) {
        items {
          ...imageField
        }
      }
    }
    fragment imageField on ImageWithDescription {
      title
      description
    }`
  )
}