import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import spain from "../icons/spain.webp";
import english from "../icons/english.webp";
import "../assets/LanguageSelector.css";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // Get initial language

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng); // Update state for visual selection
  };

  return (
    <div className="language">
      <button
        onClick={() => changeLanguage("en")}
        className={selectedLanguage === "en" ? "selected" : ""}
      >
        <img className="flag" src={english} alt="English" />
        English
      </button>
      <button
        onClick={() => changeLanguage("es")}
        className={selectedLanguage === "es" ? "selected" : ""} 
      >
        <img className="flag" src={spain} alt="Español" />
        Español
      </button>
    </div>
  );
};

export default LanguageSelector;
