import { Document } from "@contentful/rich-text-types";
import { Tag } from "./TagType";

interface Image {
  url: string;
  description: string;
}

interface Article {
  sys: {
    id: string;
  };
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
    items: Article[];
  };
}