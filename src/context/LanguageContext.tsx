import React, { createContext, useState, FC } from "react";
import { Languages, languages } from "../data/languages";
import { blog } from "../locales/blog";
import { BlogType } from "../locales/blogType";

export const LanguageContext = createContext<LanguageContextType>(null!);

export type LanguageContextType = {
  setSiteLanguage: React.Dispatch<React.SetStateAction<Languages>>,
  siteLanguage: Languages,
  index: number;
  blogList: BlogType;
}

export const LanguageProvider:FC = ({ children }) => {
  const [siteLanguage, setSiteLanguage] = useState<Languages>(languages[0]);

  const index = languages.indexOf(siteLanguage);
  const blogList = blog[siteLanguage]

  return (
    <LanguageContext.Provider
      value={{
        setSiteLanguage,
        siteLanguage,
        index,
        blogList
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
