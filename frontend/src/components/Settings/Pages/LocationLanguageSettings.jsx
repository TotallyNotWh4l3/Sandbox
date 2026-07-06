import { useState } from "react";
import Select from "react-select";
import "./location-language-settings.css";

import { LANGUAGE_OPTIONS } from "../../../constants/settingsOption";
import { useLanguage } from "../../../hooks/useLanguage";

import * as SettingsUI from "../Shared/SettingsComponents";
import SettingsSelect from "../Shared/SettingsSelect";

/**
 * LocationLanguageSettings Component
 * Location and language configuration
 */
export default function LocationLanguageSettings({ settings, updateGlobalSetting }) {
    const T = useLanguage();

    const [locationInput, setLocationInput] = useState(settings.location.name);
    const currentLanguage = settings.language;

    const handleLanguageChange = (langId) => {
        updateGlobalSetting("language", langId);
    };

    const handleLocationChange = (e) => {
        const newLocation = e.target.value;
        setLocationInput(newLocation);

        updateGlobalSetting("location", {
            name: newLocation,
            lat: 35.6762,
            lng: 139.6503,
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
                    value={currentLanguage}
                    options={LANGUAGE_OPTIONS}
                    valueKey="id"
                    labelKey="label"
                    onChange={handleLanguageChange}
                />
            </SettingsUI.Section>

        </div>
    );
}
