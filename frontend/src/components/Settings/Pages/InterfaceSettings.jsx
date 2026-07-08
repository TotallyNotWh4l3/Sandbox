import "./interface-settings.css";

import { useSettings } from "../../../hooks/useSettings";
import { useLanguage } from "../../../hooks/useLanguage";

import { LANGUAGE_OPTIONS } from "../../../constants/interface";

import Settings from "../Components/SettingsComponents";

export default function InterfaceSettings() {
    const { settings } = useSettings();
    const { t } = useLanguage();

    return (
        <div className="interface-settings">
            <Settings.PageTitle>{t("settings.interface.title")}</Settings.PageTitle>

            <Settings.Description>{t("settings.interface.description")}</Settings.Description>

            <Settings.Section>
                <Settings.SectionTitle>
                    {t("settings.interface.language.title")}
                </Settings.SectionTitle>

                <select
                    className="interface-settings__language-select"
                    value={settings.preferences.language}
                >
                    {LANGUAGE_OPTIONS.map((language) => (
                        <option key={language.id} value={language.id}>
                            {language.label}
                        </option>
                    ))}
                </select>
            </Settings.Section>

            <Settings.Divider />

            <Settings.Section>
                <Settings.SectionTitle>
                    {t("settings.interface.presets.title")}
                </Settings.SectionTitle>

                <Settings.Description>
                    {t("settings.interface.presets.description")}
                </Settings.Description>

                <div className="interface-settings__preset-list">{/* Preset cards */}</div>

                <button className="interface-settings__create-button" type="button">
                    {t("settings.interface.presets.create")}
                </button>
            </Settings.Section>
        </div>
    );
}
