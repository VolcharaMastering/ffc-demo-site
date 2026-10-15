"use client";

import { useState } from "react";
import Select from "@/components/ui/Select/Select";
import { LANGUAGES } from "@/constants/languages";

const LanguageMenu = () => {
  const [language, setLanguage] = useState<string>(LANGUAGES[0].code);

  return (
    <Select label="Language" hideLabel value={language} onChange={(event) => setLanguage(event.target.value)}>
      {LANGUAGES.map(({ code, label }) => <option key={code} value={code} lang={code}>{label}</option>)}
    </Select>
  );
};

export default LanguageMenu;
