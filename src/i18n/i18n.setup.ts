import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Translation } from "./translation.enum";
import { Language } from "./language.enum";

import en_US_presentation from "./locales/en_US/presentation.json";

const resources = {
  [Language.en_US]: {
    [Translation.PRESENTATION]: en_US_presentation,
  },
};

export const i18nSetup = () => {
  i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: Language.en_US,
    debug: true,
    resources,
  });
};
