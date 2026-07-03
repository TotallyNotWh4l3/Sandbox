import { useState } from "react";
import "./location-language-settings.css";

const LANGUAGE_OPTIONS = [
    { id: "en", label: "English" },
    { id: "ja", label: "日本語" },
    { id: "fr", label: "Français" },
    { id: "de", label: "Deutsch" },
];

/**
 * LocationLanguageSettings Component
 * Location and language configuration
 */
export default function LocationLanguageSettings({ settings, updateGlobalSetting }) {
    const [locationInput, setLocationInput] = useState(settings.location.name);
    const currentLanguage = settings.language;

    const handleLanguageChange = (langId) => {
        updateGlobalSetting("language", langId);
    };

    const handleLocationChange = (e) => {
        const newLocation = e.target.value;
        setLocationInput(newLocation);
        // In a real app, this would geocode the location
        updateGlobalSetting("location", {
            name: newLocation,
            lat: 35.6762, // placeholder
            lng: 139.6503, // placeholder
        });
    };

    return (
        <div className="location-language-settings">
            <h2 className="location-language-settings__title">Location & Language</h2>

            <section className="location-language-settings__section">
                <h3 className="location-language-settings__subtitle">Location</h3>
                <div className="location-language-settings__input-group">
                    <label htmlFor="location-input">Dashboard Location (for weather)</label>
                    <input
                        id="location-input"
                        type="text"
                        className="location-language-settings__input"
                        value={locationInput}
                        onChange={handleLocationChange}
                        placeholder="e.g., Tokyo, New York"
                    />
                    <p className="location-language-settings__hint">
                        Enter a city name to update weather location
                    </p>
                </div>
            </section>

            <section className="location-language-settings__section">
                <h3 className="location-language-settings__subtitle">Language</h3>
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
            </section>
        </div>
    );
}
