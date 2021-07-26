import { BookmarkType } from "./bookmarkType";

export interface TagType {
  name: string;
  sys: {
    id: string;
  }
  linkedFrom?: {
    bookmarkCollection: {
      items: BookmarkType[]
    }
  }
}