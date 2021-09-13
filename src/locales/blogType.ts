import { Languages } from "../data/languages";

export interface BlogType {
  searchByTags: string
}

export type BlogFullType = {
  [key in Languages]: {
    searchByTags: string;
  };
};
