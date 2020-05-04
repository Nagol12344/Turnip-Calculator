import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationCa from "./locales/ca/translation.json";
import translationDa from "./locales/da/translation.json";
import translationDe from "./locales/de/translation.json";
import translationEn from "./locales/en/translation.json";
import translationEs from "./locales/es/translation.json";
import translationFi from "./locales/fi/translation.json";
import translationFr from "./locales/fr/translation.json";
import translationId from "./locales/id/translation.json";
import translationIt from "./locales/it/translation.json";
import translationJa from "./locales/ja/translation.json";
import translationKo from "./locales/ko/translation.json";
import translationNl from "./locales/nl/translation.json";
import translationPl from "./locales/pl/translation.json";
import translationPtBR from "./locales/pt-br/translation.json";
import translationRu from "./locales/ru/translation.json";
import translationSv from "./locales/sv/translation.json";
import translationZhCN from "./locales/zh-CN/translation.json";
import translationZhHK from "./locales/zh-HK/translation.json";
import translationZhTW from "./locales/zh-TW/translation.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // we init with resources
    debug: true,
    detection: {
      // order and from where user language should be detected
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
    },

    fallbackLng: "en",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },

    resources: {
      ca: { translations: translationCa },
      da: { translations: translationDa },
      de: { translations: translationDe },
      en: { translations: translationEn },
      es: { translations: translationEs },
      fi: { translations: translationFi },
      fr: { translations: translationFr },
      id: { translations: translationId },
      it: { translations: translationIt },
      ja: { translations: translationJa },
      ko: { translations: translationKo },
      nl: { translations: translationNl },
      pl: { translations: translationPl },
      pt: { translations: translationPtBR },
      "pt-BR": { translations: translationPtBR },
      ru: { translations: translationRu },
      sv: { translations: translationSv },
      zh: { translations: translationZhCN },
      "zh-CN": { translations: translationZhCN },
      "zh-HK": { translations: translationZhHK },
      "zh-TW": { translations: translationZhTW },
    },

    react: {
      useSuspense: false,
    },

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;
