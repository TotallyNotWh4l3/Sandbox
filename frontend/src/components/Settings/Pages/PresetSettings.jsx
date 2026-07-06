import { useState } from "react";
import "./preset-settings.css";

import { DEFAULT_PRESETS } from "../../../constants/settingsOption";

import SettingsPageTitle from "../Shared/SettingsPageTitle";
import SettingsHeader from "../Shared/SettingsHeader";

/**
 * PresetSettings Component
 * Manage theme presets and custom configurations.
 */
export default function PresetSettings({
    settings,
    applyPreset,
    saveCustomPreset,
    deleteCustomPreset,
    resetToDefaults,
}) {
    const [customPresetName, setCustomPresetName] = useState("");
    const [showSavePrompt, setShowSavePrompt] = useState(false);

    const currentPreset = settings.currentPreset;
    const customPresets = settings.customPresets;

    const handleApplyPreset = (presetId) => {
        applyPreset(presetId);
    };

    const handleSaveCustomPreset = () => {
        if (!customPresetName.trim()) return;

        saveCustomPreset(customPresetName.trim());
        setCustomPresetName("");
        setShowSavePrompt(false);
    };

    const handleDeletePreset = (presetName) => {
        if (window.confirm(`Delete preset "${presetName}"?`)) {
            deleteCustomPreset(presetName);
        }
    };

    const handleResetAll = () => {
        if (window.confirm("Reset all settings to defaults? This cannot be undone.")) {
            resetToDefaults();
        }
    };

    return (
        <div className="presets-settings">
            <SettingsPageTitle>Presets & Configuration</SettingsPageTitle>

            {/* Built-in Presets */}
            <section className="presets-settings__section">
                <SettingsHeader
                    title="Built-in Presets"
                    description="Quickly switch between predefined dashboard configurations."
                />

                <div className="presets-settings__grid">
                    {DEFAULT_PRESETS.map((preset) => (
                        <button
                            key={preset.id}
                            className={`presets-settings__preset-card ${
                                currentPreset === preset.id
                                    ? "presets-settings__preset-card--active"
                                    : ""
                            }`}
                            onClick={() => handleApplyPreset(preset.id)}
                            aria-pressed={currentPreset === preset.id}
                        >
                            <span className="presets-settings__preset-label">{preset.name}</span>

                            {currentPreset === preset.id && (
                                <span className="presets-settings__checkmark">✓</span>
                            )}
                        </button>
                    ))}
                </div>
            </section>

            {/* Custom Presets */}
            {customPresets.length > 0 && (
                <section className="presets-settings__section">
                    <SettingsHeader
                        title="Custom Presets"
                        description="Your saved dashboard configurations."
                    />

                    <div className="presets-settings__custom-presets">
                        {customPresets.map((preset) => (
                            <div key={preset.name} className="presets-settings__custom-item">
                                <button
                                    className={`presets-settings__custom-button ${
                                        currentPreset === preset.name
                                            ? "presets-settings__custom-button--active"
                                            : ""
                                    }`}
                                    onClick={() => handleApplyPreset(preset.name)}
                                >
                                    <span>{preset.name}</span>

                                    {currentPreset === preset.name && (
                                        <span className="presets-settings__checkmark">✓</span>
                                    )}
                                </button>

                                <button
                                    className="presets-settings__delete-btn"
                                    title="Delete preset"
                                    onClick={() => handleDeletePreset(preset.name)}
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Save Preset */}
            <section className="presets-settings__section">
                <SettingsHeader
                    title="Save Current Settings"
                    description="Store your current configuration as a reusable preset."
                />

                {!showSavePrompt ? (
                    <button
                        className="presets-settings__save-btn"
                        onClick={() => setShowSavePrompt(true)}
                    >
                        Save as Custom Preset
                    </button>
                ) : (
                    <div className="presets-settings__save-prompt">
                        <input
                            type="text"
                            className="presets-settings__input"
                            placeholder="Enter preset name..."
                            value={customPresetName}
                            onChange={(e) => setCustomPresetName(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSaveCustomPreset();
                                }
                            }}
                        />

                        <div className="presets-settings__prompt-buttons">
                            <button
                                className="presets-settings__confirm-btn"
                                disabled={!customPresetName.trim()}
                                onClick={handleSaveCustomPreset}
                            >
                                Save
                            </button>

                            <button
                                className="presets-settings__cancel-btn"
                                onClick={() => {
                                    setShowSavePrompt(false);
                                    setCustomPresetName("");
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </section>

            {/* Reset */}
            <section className="presets-settings__section">
                <SettingsHeader
                    title="Reset Settings"
                    description="Restore every setting back to its default value."
                />

                <button className="presets-settings__reset-btn" onClick={handleResetAll}>
                    Reset All Settings
                </button>

                <p className="presets-settings__warning">This action cannot be undone.</p>
            </section>
        </div>
    );
}
