import React, { createContext, useState, FC } from "react";
import { languages } from "../data/languages";

export const LanguageContext = createContext<LanguageContextType>(null!);

export type LanguageContextType = {
  setSiteLanguage: React.Dispatch<React.SetStateAction<string>>,
  siteLanguage: string,
  index: number;
}

export const LanguageProvider:FC = ({ children }) => {
  const [siteLanguage, setSiteLanguage] = useState(languages[0]);

  const index = languages.indexOf(siteLanguage);

  return (
    <LanguageContext.Provider
      value={{
        setSiteLanguage,
        siteLanguage,
        index,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
