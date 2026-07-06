// hooks/useLanguage.js

import { useSettings } from "./useSettings";
import { LANGUAGES } from "../constants/i18n";

export function useLanguage() {
    const { settings } = useSettings();
    return LANGUAGES[settings.language] || LANGUAGES.en;
}