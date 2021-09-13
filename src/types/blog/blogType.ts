import { BlogPostType } from "./blogPostType";

export interface BlogType {
  filteredByTags: {
    items: {
      name: string;
      linkedFrom: {
        blogPostCollection: {
          items: BlogPostType[];
        }
      }
    }[]
  };
  blogPostCollection: {
    items: BlogPostType[];
  };
}