import { Document } from "@contentful/rich-text-types";
import { Tag } from "./TagType";
import { Image } from "./ImageType";

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
  }
}