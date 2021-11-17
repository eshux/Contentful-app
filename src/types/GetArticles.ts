import { Tag } from "./TagType";
import { Image } from "./ImageType";

export interface Article {
  slug: string;
  title: string;
  shortDescription: string;
  tagCollection: {
    items: Tag[];
  }
  image: Image;
}

export interface GetArticles {
  articleCollection: {
    total: number;
    skip: number;
    items: Article[];
  }
}