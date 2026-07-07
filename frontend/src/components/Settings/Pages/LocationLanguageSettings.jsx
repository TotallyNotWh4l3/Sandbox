import { useState, useEffect } from "react";

import "./location-language-settings.css";

import { LANGUAGE_OPTIONS } from "../../../constants/settingsOption";

import { useLanguage } from "../../../hooks/useLanguage";
import { useSettings } from "../../../hooks/useSettings";

import * as SettingsUI from "../Shared/SettingsComponents";
import SettingsSelect from "../Shared/SettingsSelect";

/**
 * LocationLanguageSettings Component
 * Configure language and default location.
 */
export default function LocationLanguageSettings() {
    const T = useLanguage();

    const { settings, updatePreference } = useSettings();

    const [locationInput, setLocationInput] = useState(settings.preferences.location.name);

    useEffect(() => {
        setLocationInput(settings.preferences.location.name);
    }, [settings.preferences.location.name]);

    const handleLanguageChange = (language) => {
        updatePreference("language", language);
    };

    const handleLocationChange = (e) => {
        const value = e.target.value;

        setLocationInput(value);

        updatePreference("location", {
            ...settings.preferences.location,
            name: value,
        });
    };

    return (
        <div className="location-language-settings">
            <SettingsUI.PageTitle>{T.settings.location.title}</SettingsUI.PageTitle>

            <SettingsUI.Section>
                <SettingsUI.Header>{T.settings.location.location}</SettingsUI.Header>

                <SettingsUI.Instructions>{T.settings.location.hint}</SettingsUI.Instructions>

                <label htmlFor="location-input">{T.settings.location.dashboardLocation}</label>

                <input
                    id="location-input"
                    type="text"
                    className="location-language-settings__input"
                    value={locationInput}
                    onChange={handleLocationChange}
                    placeholder={T.settings.location.placeholder}
                />
            </SettingsUI.Section>

            <SettingsUI.Section>
                <SettingsUI.Header>{T.settings.location.language}</SettingsUI.Header>

                <SettingsSelect
                    value={settings.preferences.language}
                    options={LANGUAGE_OPTIONS}
                    valueKey="id"
                    labelKey="label"
                    onChange={handleLanguageChange}
                />
            </SettingsUI.Section>
        </div>
    );
}
