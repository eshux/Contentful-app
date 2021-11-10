import { Languages } from "../data/languages";

export type ButtonsType = {
  scrollDown: string;
}

export type Buttons = {
  [key in Languages]: {
    scrollDown: string;
  };
};
