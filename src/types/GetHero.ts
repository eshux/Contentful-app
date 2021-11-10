import { Image } from "./ImageType";

interface Hero {
  sys: {
    id: string;
  };
  title: string;
  description: string;
  image: Image;
}

export interface GetHero {
  heroCollection: {
    items: Hero[];
  };
}