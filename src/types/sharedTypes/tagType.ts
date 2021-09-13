import { BookmarkType } from "../homepage/bookmarkType";

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