import { BlogPostType } from "./blogPostType";

export interface BlogType {
  blogPostCollection: {
    items: BlogPostType[];
  }
}