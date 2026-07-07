import { useState } from "react";
import "./appearance-settings.css";

import { useLanguage } from "../../../hooks/useLanguage";

import * as SettingsUI from "../Shared/SettingsComponents";

/**
 * AppearanceSettings
 *
 * Manage dashboard appearance and Styles.
 *
 * Styles are complete appearance configurations.
 * Built-in styles cannot be edited.
 * Custom styles can be created, edited and deleted.
 */
export default function AppearanceSettings({
    settings,

    updatePreference,

    createStyle,
    duplicateStyle,
    updateStyle,
    deleteStyle,
}) {
    const T = useLanguage();

    const [editingStyle, setEditingStyle] = useState(null);

    const currentStyle = settings.preferences.appearance.currentStyle;

    const styles = settings.styles;

    const builtInStyles = styles.filter((style) => style.builtIn);

    const customStyles = styles.filter((style) => !style.builtIn);

    const handleSelectStyle = (styleId) => {
        updatePreference("appearance", {
            ...settings.preferences.appearance,
            currentStyle: styleId,
        });
    };

    return (
        <div className="appearance-settings">
            <SettingsUI.PageTitle>Appearance</SettingsUI.PageTitle>

            {/* ------------------------------------------------ */}
            {/* Built-in Styles                                 */}
            {/* ------------------------------------------------ */}

            <SettingsUI.Section>
                <SettingsUI.Header>Default Styles</SettingsUI.Header>

                <SettingsUI.Instructions>
                    Choose one of the built-in styles. Default styles cannot be modified.
                </SettingsUI.Instructions>

                <div className="appearance-settings__grid">
                    {builtInStyles.map((style) => (
                        <button
                            key={style.id}
                            className={`appearance-settings__card ${
                                currentStyle === style.id ? "appearance-settings__card--active" : ""
                            }`}
                            onClick={() => handleSelectStyle(style.id)}
                        >
                            <span className="appearance-settings__preview">{style.preview}</span>

                            <span>{style.name}</span>
                        </button>
                    ))}
                </div>
            </SettingsUI.Section>

            {/* ------------------------------------------------ */}
            {/* Custom Styles                                   */}
            {/* ------------------------------------------------ */}

            <SettingsUI.Section>
                <SettingsUI.Header>Custom Styles</SettingsUI.Header>

                <SettingsUI.Instructions>
                    Create your own dashboard appearance by customizing an existing style.
                </SettingsUI.Instructions>

                <button className="appearance-settings__create-btn" onClick={createStyle}>
                    Create New Style
                </button>

                {customStyles.length > 0 && (
                    <div className="appearance-settings__custom-list">
                        {customStyles.map((style) => (
                            <div key={style.id} className="appearance-settings__custom-item">
                                <button
                                    className={`appearance-settings__custom-button ${
                                        currentStyle === style.id
                                            ? "appearance-settings__custom-button--active"
                                            : ""
                                    }`}
                                    onClick={() => handleSelectStyle(style.id)}
                                >
                                    {style.name}
                                </button>

                                <div className="appearance-settings__actions">
                                    <button onClick={() => duplicateStyle(style.id)}>
                                        Duplicate
                                    </button>

                                    <button onClick={() => setEditingStyle(style)}>Edit</button>

                                    <button onClick={() => deleteStyle(style.id)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </SettingsUI.Section>

            {/* ------------------------------------------------ */}
            {/* Appearance Editor                               */}
            {/* ------------------------------------------------ */}

            {editingStyle && (
                <SettingsUI.Section>
                    <SettingsUI.Header>Edit "{editingStyle.name}"</SettingsUI.Header>

                    <SettingsUI.Instructions>
                        This is where all appearance customization (colors, typography, borders,
                        effects, spacing, etc.) will live.
                    </SettingsUI.Instructions>
                </SettingsUI.Section>
            )}
        </div>
    );
}
