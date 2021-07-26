import { BookmarkType } from "./bookmarkType";
import { HeaderType } from "./headerType";
import { PersonType } from "./personType";
import { TagType } from "./tagType";

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

