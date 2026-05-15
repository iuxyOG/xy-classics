import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { locale } from "@tauri-apps/plugin-os";

import en from "./locales/en.json";
import pt from "./locales/pt.json";

import "./types";

const STORAGE_KEY = "xy-classics-lang";

export type SupportedLang = "pt" | "en";

async function getInitialLanguage(): Promise<SupportedLang> {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "pt" || stored === "en") return stored;

  try {
    const osLocale = await locale();
    if (osLocale?.toLowerCase().startsWith("pt")) return "pt";
  } catch {
    // Tauri unavailable (vitest, plain browser, plugin-os not registered).
    // Fallthrough to default.
  }

  return "pt";
}

export async function initI18n(): Promise<void> {
  const lng = await getInitialLanguage();

  await i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        pt: { translation: pt },
        en: { translation: en },
      },
      lng,
      fallbackLng: "pt",
      supportedLngs: ["pt", "en"],
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage"],
        lookupLocalStorage: STORAGE_KEY,
        caches: ["localStorage"],
      },
    });
}

export default i18next;
