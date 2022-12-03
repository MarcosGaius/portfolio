import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "../public/locales/en";
import { pt } from "../public/locales/pt";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        ...en,
      },
    },
    pt: {
      translation: {
        ...pt,
      },
    },
  },
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
