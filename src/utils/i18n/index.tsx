import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en/translation.json";
import ua from "./locales/ua/translation.json";
import pl from "./locales/pl/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "ua", "pl"],
    resources: {
      en: { translation: en },
      ua: { translation: ua },
      pl: { translation: pl },
    },
    detection: {
      order: ["querystring", "localStorage", "cookie"],
      caches: ["localStorage", "cookie"],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;

const updateDocumentLanguage = (language: string) => {
  document.documentElement.lang = language === "ua" ? "uk" : language;
};
i18n.on("languageChanged", updateDocumentLanguage);
updateDocumentLanguage(i18n.resolvedLanguage || "en");
