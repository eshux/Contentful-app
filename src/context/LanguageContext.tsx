import React, { createContext, useState, FC } from "react";
import { Languages, languages } from "../data/languages";
import { buttons } from "../locales/buttons";
import { ButtonsType } from "../locales/buttonsType";

export const LanguageContext = createContext<LanguageContextType>(null!);

export type LanguageContextType = {
  setSiteLanguage: React.Dispatch<React.SetStateAction<Languages>>,
  siteLanguage: Languages,
  index: number;
  buttonList: ButtonsType;
}

export const LanguageProvider:FC = ({ children }) => {
  const [siteLanguage, setSiteLanguage] = useState<Languages>(languages[0]);

  const index = languages.indexOf(siteLanguage);
  const buttonList = buttons[siteLanguage]

  return (
    <LanguageContext.Provider
      value={{
        setSiteLanguage,
        siteLanguage,
        index,
        buttonList
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
