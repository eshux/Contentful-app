import { BookmarkType } from "./bookmarkType";
import { HeaderType } from "./headerType";
import { PersonType } from "./personType";
import { TagType } from "../sharedTypes/tagType";

export interface HomepageType {
  headerCollection: {
    items: HeaderType[];
  }
  personCollection: {
    items: PersonType[];
  }
  bookmarkCollection: {
    items: BookmarkType[];
  }
  favoriteTag: {
    items: TagType[];
  }
}

