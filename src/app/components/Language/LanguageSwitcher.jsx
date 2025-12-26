"use client";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/Providers/ContextProvider";
import { Globe, ChevronDown } from "lucide-react";

export default function LanguageSwitcher() {
  const { locale, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // বাইরে ক্লিক করলে ড্রপডাউন বন্ধ হওয়ার জন্য
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: "en", label: "English (En)" },
    { code: "fr", label: "Français (Fr)" },
  ];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 bg-dark border border-primary1 text-white text-sm rounded-2xl p-2 md:py-2 md:px-3 hover:bg-black transition-all focus:outline-none"
      >
        <Globe size={18} className="text-primary1" />
        {/* <span className="uppercase text-xs">{locale}</span> */}
        <ChevronDown
          size={12}
          className={`duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 w-32 origin-top-right rounded-md bg-dark border border-primary1 shadow-xl z-50 overflow-hidden">
          <div className="">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center px-4 py-2 text-sm text-left hover:bg-primary1 hover:text-white transition-colors ${
                  locale === lang.code
                    ? "bg-primary1/30 text-primary1"
                    : "text-white"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
