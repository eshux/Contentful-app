import { TagType } from "../sharedTypes/tagType";
import { ImageTextType } from "./imageTextType";
import { ImageType } from "./imageType";
import { TextType } from "./textType";

export interface BlogPostType {
  sys: {
    id: string;
  }
  title: string;
  introText: string;
  mainImage: {
    title: string;
    description: string;
    url: string;
  }
  imageCollection: {
    items: ImageType[];
  }
  imageTextCollection: {
    items: ImageTextType[];
  }
  textCollection: {
    items: TextType[];
  }
  tagsCollection: {
    items: TagType[];
  }
}