import "./theme-settings.css";

import { THEME_OPTIONS } from "../../../constants/settingsOption";
import { useLanguage } from "../../../hooks/useLanguage";

import * as SettingsUI from "../Shared/SettingsComponents";

/**
 * ThemeSettings Component
 * Configure dashboard theme and appearance
 */
export default function ThemeSettings({ settings, updateGlobalSetting }) {
    const T = useLanguage();

    const currentTheme = settings.theme;

    const handleThemeChange = (themeId) => {
        updateGlobalSetting("theme", themeId);
    };

    return (
        <div className="theme-settings">
            <SettingsUI.PageTitle>{T.settings.theme.title}</SettingsUI.PageTitle>

            <SettingsUI.Section>
                <SettingsUI.Header>{T.settings.theme.presets}</SettingsUI.Header>

                <div className="theme-settings__grid">
                    {THEME_OPTIONS.map((theme) => (
                        <button
                            key={theme.id}
                            className={`theme-settings__card ${
                                currentTheme === theme.id ? "theme-settings__card--active" : ""
                            }`}
                            onClick={() => handleThemeChange(theme.id)}
                        >
                            <span className="theme-settings__preview">{theme.preview}</span>

                            <span className="theme-settings__label">
                                {T.settings.theme.options[theme.labelKey]}
                            </span>
                        </button>
                    ))}
                </div>
            </SettingsUI.Section>

            <SettingsUI.Section>
                <SettingsUI.Header>{T.settings.theme.customization}</SettingsUI.Header>

                <SettingsUI.Instructions>
                    {T.settings.theme.customizationDescription}
                </SettingsUI.Instructions>
            </SettingsUI.Section>
        </div>
    );
}
