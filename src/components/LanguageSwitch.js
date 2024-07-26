import React from "react";
import { SUPPORTED_LANGUAGES } from "../utils/languageConstants";
import { useDispatch } from "react-redux";
import { switchLanguage } from "../store/slices/langSlice";

const LanguageSwitch = () => {
  const dispatch = useDispatch();

  const handleLangSwitch = (e) => {
    dispatch(switchLanguage(e.target.value));
  };

  return (
    <select
      className="px-4 py-2 rounded-lg bg-purple-800 text-white"
      onChange={handleLangSwitch}
    >
      {SUPPORTED_LANGUAGES.map((lang) => (
        <option key={lang.identifier} value={lang.identifier}>
          {lang.text}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitch;
