"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import translationsData from "@/messages/language.json";

const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const savedLocale = localStorage.getItem("app_lang");

    if (savedLocale) {
      setLocale(savedLocale);
    } else {
      const host = window.location.hostname;

      // ✅ For production domain ending with .fr
      if (host.endsWith(".fr")) {
        setLocale("fr");
      }
      // ✅ For your Vercel preview domain
      else if (host === "mon5-volyball.vercel.app") {
        setLocale("fr"); // temporary override for testing
      } else {
        setLocale("en");
      }
    }
  }, []);

  const changeLanguage = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem("app_lang", newLocale);
  };

  const t = translationsData[locale];

  return (
    <LanguageContext.Provider value={{ locale, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
