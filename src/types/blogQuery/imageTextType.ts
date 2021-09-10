import { Document } from "@contentful/rich-text-types";
import { ImageType } from "./imageType";

export interface ImageTextType {
  title?: string;
  image: ImageType;
  text: {
    json: Document;
  };
}