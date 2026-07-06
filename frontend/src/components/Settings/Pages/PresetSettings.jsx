// PresetSettings.jsx

import { useState } from "react";
import "./preset-settings.css";

/**
 * PresetsSettings Component
 * Manage theme presets and custom configurations
 */
import { DEFAULT_PRESETS } from "../../../constants/settingsOption";

export default function PresetsSettings({
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
        if (customPresetName.trim()) {
            saveCustomPreset(customPresetName);
            setCustomPresetName("");
            setShowSavePrompt(false);
        }
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
            <h2 className="presets-settings__title">Presets & Configuration</h2>

            {/* Default Presets */}
            <section className="presets-settings__section">
                <h3 className="presets-settings__subtitle">Built-in Presets</h3>
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
                    <h3 className="presets-settings__subtitle">Your Custom Presets</h3>
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
                                    onClick={() => handleDeletePreset(preset.name)}
                                    title="Delete preset"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Save Current as Preset */}
            <section className="presets-settings__section">
                <h3 className="presets-settings__subtitle">Save Current Settings</h3>
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
                            placeholder="Enter preset name..."
                            value={customPresetName}
                            onChange={(e) => setCustomPresetName(e.target.value)}
                            className="presets-settings__input"
                            onKeyPress={(e) => e.key === "Enter" && handleSaveCustomPreset()}
                        />
                        <div className="presets-settings__prompt-buttons">
                            <button
                                onClick={handleSaveCustomPreset}
                                className="presets-settings__confirm-btn"
                                disabled={!customPresetName.trim()}
                            >
                                Save
                            </button>
                            <button
                                onClick={() => {
                                    setShowSavePrompt(false);
                                    setCustomPresetName("");
                                }}
                                className="presets-settings__cancel-btn"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </section>

            {/* Reset to Defaults */}
            <section className="presets-settings__section">
                <h3 className="presets-settings__subtitle">Reset</h3>
                <button onClick={handleResetAll} className="presets-settings__reset-btn">
                    Reset All Settings to Defaults
                </button>
                <p className="presets-settings__warning">
                    This will reset all settings to their default values.
                </p>
            </section>
        </div>
    );
}
