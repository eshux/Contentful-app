import { TagType } from "./tagType";

export interface BookmarkType {
  sys: {
    id: string;
  };
  title: string;
  url: string;
  description: string;
  tagCollection: {
    items: TagType[]
  }
}