import { Document } from "@contentful/rich-text-types";
import { Tag } from "./TagType";
import { Image } from "./ImageType";

export interface Article {
  sys: {
    id: string;
  };
  slug: string;
  title: string;
  description: {
    json: Document;
  }  
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