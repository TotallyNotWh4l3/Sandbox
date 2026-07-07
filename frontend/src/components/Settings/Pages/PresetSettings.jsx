import { useState } from "react";
import "./preset-settings.css";

import * as SettingsUI from "../Shared/SettingsComponents";

/**
 * PresetSettings Component
 * Manage style presets and custom configurations.
 */
export default function PresetSettings({
    settings,
    applyStyle,
    saveCustomStyle,
    deleteCustomStyle,
    resetToDefaults,
}) {
    const [customStyleName, setCustomStyleName] = useState("");
    const [showSavePrompt, setShowSavePrompt] = useState(false);

    const currentStyle = settings.preferences.appearance.currentStyle;

    const builtInStyles = settings.styles.filter((style) => style.builtIn);
    const customStyles = settings.styles.filter((style) => !style.builtIn);

    const handleApplyStyle = (styleId) => {
        applyStyle(styleId);
    };

    const handleSaveCustomStyle = () => {
        if (!customStyleName.trim()) return;

        saveCustomStyle(customStyleName.trim());

        setCustomStyleName("");
        setShowSavePrompt(false);
    };

    const handleDeleteStyle = (styleId) => {
        if (window.confirm(`Delete style "${styleId}"?`)) {
            deleteCustomStyle(styleId);
        }
    };

    const handleResetAll = () => {
        if (window.confirm("Reset all settings to defaults? This cannot be undone.")) {
            resetToDefaults();
        }
    };

    return (
        <div className="presets-settings">
            <SettingsUI.PageTitle>Styles & Configuration</SettingsUI.PageTitle>

            <SettingsUI.Section>
                <SettingsUI.Header>Built-in Styles</SettingsUI.Header>

                <SettingsUI.Instructions>
                    Switch between predefined appearance styles.
                </SettingsUI.Instructions>

                <div className="presets-settings__grid">
                    {builtInStyles.map((style) => (
                        <button
                            key={style.id}
                            className={`presets-settings__preset-card ${
                                currentStyle === style.id
                                    ? "presets-settings__preset-card--active"
                                    : ""
                            }`}
                            onClick={() => handleApplyStyle(style.id)}
                            aria-pressed={currentStyle === style.id}
                        >
                            <span className="presets-settings__preset-label">{style.name}</span>

                            {currentStyle === style.id && (
                                <span className="presets-settings__checkmark">✓</span>
                            )}
                        </button>
                    ))}
                </div>
            </SettingsUI.Section>

            {customStyles.length > 0 && (
                <SettingsUI.Section>
                    <SettingsUI.Header>Custom Styles</SettingsUI.Header>

                    <SettingsUI.Instructions>
                        Your saved appearance configurations.
                    </SettingsUI.Instructions>

                    <div className="presets-settings__custom-presets">
                        {customStyles.map((style) => (
                            <div key={style.id} className="presets-settings__custom-item">
                                <button
                                    className={`presets-settings__custom-button ${
                                        currentStyle === style.id
                                            ? "presets-settings__custom-button--active"
                                            : ""
                                    }`}
                                    onClick={() => handleApplyStyle(style.id)}
                                >
                                    <span>{style.name}</span>

                                    {currentStyle === style.id && (
                                        <span className="presets-settings__checkmark">✓</span>
                                    )}
                                </button>

                                <button
                                    className="presets-settings__delete-btn"
                                    title="Delete style"
                                    onClick={() => handleDeleteStyle(style.id)}
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                </SettingsUI.Section>
            )}

            <SettingsUI.Section>
                <SettingsUI.Header>Save Current Style</SettingsUI.Header>

                <SettingsUI.Instructions>
                    Store your current appearance as a reusable style.
                </SettingsUI.Instructions>

                {!showSavePrompt ? (
                    <button
                        className="presets-settings__save-btn"
                        onClick={() => setShowSavePrompt(true)}
                    >
                        Save as Custom Style
                    </button>
                ) : (
                    <div className="presets-settings__save-prompt">
                        <input
                            type="text"
                            className="presets-settings__input"
                            placeholder="Enter style name..."
                            value={customStyleName}
                            onChange={(e) => setCustomStyleName(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSaveCustomStyle();
                                }
                            }}
                        />

                        <div className="presets-settings__prompt-buttons">
                            <button
                                className="presets-settings__confirm-btn"
                                disabled={!customStyleName.trim()}
                                onClick={handleSaveCustomStyle}
                            >
                                Save
                            </button>

                            <button
                                className="presets-settings__cancel-btn"
                                onClick={() => {
                                    setShowSavePrompt(false);
                                    setCustomStyleName("");
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </SettingsUI.Section>

            <SettingsUI.Section>
                <SettingsUI.Header>Reset Settings</SettingsUI.Header>

                <SettingsUI.Instructions>
                    Restore every setting back to its default value.
                </SettingsUI.Instructions>

                <button className="presets-settings__reset-btn" onClick={handleResetAll}>
                    Reset All Settings
                </button>

                <p className="presets-settings__warning">This action cannot be undone.</p>
            </SettingsUI.Section>
        </div>
    );
}
