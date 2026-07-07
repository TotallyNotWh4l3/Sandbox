import "./theme-settings.css";

import { useLanguage } from "../../../hooks/useLanguage";

import * as SettingsUI from "../Shared/SettingsComponents";

/**
 * ThemeSettings Component
 * Configure dashboard appearance style.
 */
export default function ThemeSettings({ settings, applyStyle }) {
    const T = useLanguage();

    const currentStyle = settings.preferences.appearance.currentStyle;

    const styles = settings.styles;

    const handleStyleChange = (styleId) => {
        applyStyle(styleId);
    };

    return (
        <div className="theme-settings">
            <SettingsUI.PageTitle>{T.settings.theme.title}</SettingsUI.PageTitle>

            <SettingsUI.Section>
                <SettingsUI.Header>{T.settings.theme.presets}</SettingsUI.Header>

                <div className="theme-settings__grid">
                    {styles.map((style) => (
                        <button
                            key={style.id}
                            className={`theme-settings__card ${
                                currentStyle === style.id ? "theme-settings__card--active" : ""
                            }`}
                            onClick={() => handleStyleChange(style.id)}
                        >
                            <span className="theme-settings__preview">{style.name}</span>

                            <span className="theme-settings__label">{style.name}</span>
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
