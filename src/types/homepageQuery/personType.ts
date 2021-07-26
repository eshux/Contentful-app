import { Document } from "@contentful/rich-text-types";

export interface PersonType {
  name: string;
  linkedin: string;
  facebook: string;
  bio: {
    json: Document;
  }
  image: {
    url: string;
    title: string;
  }
}