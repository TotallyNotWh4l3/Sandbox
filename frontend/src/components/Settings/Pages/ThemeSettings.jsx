import "./theme-settings.css";

import { THEME_OPTIONS } from "../../../constants/settingsOption";
import { useLanguage } from "../../../hooks/useLanguage";

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
            <h2 className="theme-settings__title">{T.settings.theme.title}</h2>

            <section className="theme-settings__section">
                <h3 className="theme-settings__subtitle">{T.settings.theme.presets}</h3>

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
            </section>

            <section className="theme-settings__section">
                <h3 className="theme-settings__subtitle">{T.settings.theme.customization}</h3>

                <p className="theme-settings__description">
                    {T.settings.theme.customizationDescription}
                </p>
            </section>
        </div>
    );
}
