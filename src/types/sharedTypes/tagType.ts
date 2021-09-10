import { BookmarkType } from "../homepageQuery/bookmarkType";

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