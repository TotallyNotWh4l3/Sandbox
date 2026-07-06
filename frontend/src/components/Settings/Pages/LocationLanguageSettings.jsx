import { useState } from "react";
import "./location-language-settings.css";

import { LANGUAGE_OPTIONS } from "../../../constants/settingsOption";
import { useLanguage } from "../../../hooks/useLanguage";

import SettingsPageTitle from "../Shared/SettingsPageTitle";
import SettingsSection from "../Shared/SettingsSection";
import SettingsInstruction from "../Shared/SettingsInstruction";

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
            <SettingsPageTitle>{T.settings.location.title}</SettingsPageTitle>

            <SettingsSection title={T.settings.location.location}>
                <div className="location-language-settings__input-group">
                    <label htmlFor="location-input">{T.settings.location.dashboardLocation}</label>

                    <input
                        id="location-input"
                        type="text"
                        className="location-language-settings__input"
                        value={locationInput}
                        onChange={handleLocationChange}
                        placeholder={T.settings.location.placeholder}
                    />


                    <SettingsInstruction>
                        {T.settings.location.hint}
                    </SettingsInstruction>
                </div>
            </SettingsSection>

            <SettingsSection title={T.settings.location.language}>
                <div className="location-language-settings__language-group">
                    {LANGUAGE_OPTIONS.map((lang) => (
                        <label key={lang.id} className="location-language-settings__radio-label">
                            <input
                                type="radio"
                                name="language"
                                value={lang.id}
                                checked={currentLanguage === lang.id}
                                onChange={() => handleLanguageChange(lang.id)}
                            />

                            <span>{lang.label}</span>
                        </label>
                    ))}
                </div>
            </SettingsSection>
        </div>
    );
}
