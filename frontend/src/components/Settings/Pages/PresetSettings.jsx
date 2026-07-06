import { useState } from "react";
import "./preset-settings.css";

import { DEFAULT_PRESETS } from "../../../constants/settingsOption";

import * as SettingsUI from "../Shared/SettingsComponents"

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
            <SettingsUI.PageTitle>Presets & Configuration</SettingsUI.PageTitle>

            {/* Built-in Presets */}
            <SettingsUI.Section>
                <SettingsUI.Header>Built-in Presets</SettingsUI.Header>

                <SettingsUI.Instructions>
                    Quickly switch between predefined dashboard configurations.
                </SettingsUI.Instructions>

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
            </SettingsUI.Section>

            {/* Custom Presets */}
            {customPresets.length > 0 && (
                <SettingsUI.Section>
                    <SettingsUI.Header>Custom Presets</SettingsUI.Header>

                    <SettingsUI.Instructions>
                        Your saved dashboard configurations.
                    </SettingsUI.Instructions>

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
                </SettingsUI.Section>
            )}

            {/* Save Preset */}
            <SettingsUI.Section>
                <SettingsUI.Header>Save Current Settings</SettingsUI.Header>

                <SettingsUI.Instructions>
                    Store your current configuration as a reusable preset.
                </SettingsUI.Instructions>

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
            </SettingsUI.Section>

            {/* Reset */}
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
