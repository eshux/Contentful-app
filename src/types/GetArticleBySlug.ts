import { Document } from "@contentful/rich-text-types";
import { Tag } from "./TagType";
import { Image } from "./ImageType";

export interface Links {
  entries: {
    hyperlink: {
      sys: {
        id: string;
      },
      slug: string;
    }[],
  },
  assets: {
    hyperlink: {
      sys: {
        id: string;
      },
      url: string;
    }[],
    block: {
      sys: {
        id: string;
      },
      description: string;
      url: string;
    }[]
  }
}

export interface ArticleBySlug {
  title: string;
  content: {
    json: Document;
    links?: Links;
  }  
  tagCollection: {
    items: Tag[];
  }
  image: Image;
}

export interface GetArticleBySlug {
  articleCollection: {
    items: ArticleBySlug[];
  }
}