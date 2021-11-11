import { Tag } from "./TagType";

export interface GetTags {
  tagCollection: {
    items: Tag[];
  };
}