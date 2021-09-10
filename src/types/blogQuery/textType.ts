import { Document } from "@contentful/rich-text-types";

export interface TextType {
  title?: string;
  text: {
    json: Document;
  }
}