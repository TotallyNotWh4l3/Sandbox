import { useState, useEffect, useCallback } from "react";
import { useSettingsContext } from "../context/SettingsContext";
import { DEFAULT_SETTINGS } from "../constants/settingsOption";

/**
 * useSettings Hook
 * Manages global dashboard settings with localStorage persistence
 */
export function useSettingsState() {
    const [settings, setSettings] = useState(() => {
        try {
            const stored = localStorage.getItem("co-efficient-settings");
            return stored ? JSON.parse(stored) : DEFAULT_SETTINGS;
        } catch (e) {
            console.error("Failed to load settings from localStorage:", e);
            return DEFAULT_SETTINGS;
        }
    });

    // Persist to localStorage whenever settings change
    useEffect(() => {
        try {
            localStorage.setItem("co-efficient-settings", JSON.stringify(settings));
        } catch (e) {
            console.error("Failed to save settings to localStorage:", e);
        }
    }, [settings]);

    // =====================================================
    // Preferences
    // =====================================================

    const updatePreference = useCallback((key, value) => {
        setSettings((prev) => ({
            ...prev,
            preferences: {
                ...prev.preferences,
                [key]: value,
            },
        }));
    }, []);

    // =====================================================
    // Dashboard Layout
    // =====================================================

    const updateLayoutSetting = useCallback((key, value) => {
        setSettings((prev) => ({
            ...prev,
            dashboard: {
                ...prev.dashboard,
                layout: {
                    ...prev.dashboard.layout,
                    [key]: value,
                },
            },
        }));
    }, []);

    // =====================================================
    // Module Defaults
    // =====================================================

    const updateModuleDefault = useCallback((moduleType, key, value) => {
        setSettings((prev) => ({
            ...prev,
            moduleDefaults: {
                ...prev.moduleDefaults,
                [moduleType]: {
                    ...prev.moduleDefaults[moduleType],
                    [key]: value,
                },
            },
        }));
    }, []);

    // =====================================================
    // Dashboard Modules
    // =====================================================

    const addDashboardModule = useCallback((module) => {
        setSettings((prev) => ({
            ...prev,
            dashboard: {
                ...prev.dashboard,
                modules: [...prev.dashboard.modules, module],
            },
        }));
    }, []);

    const updateDashboardModule = useCallback((id, updates) => {
        setSettings((prev) => ({
            ...prev,
            dashboard: {
                ...prev.dashboard,
                modules: prev.dashboard.modules.map((module) =>
                    module.id === id
                        ? {
                              ...module,
                              ...updates,
                          }
                        : module,
                ),
            },
        }));
    }, []);

    const removeDashboardModule = useCallback((id) => {
        setSettings((prev) => ({
            ...prev,
            dashboard: {
                ...prev.dashboard,
                modules: prev.dashboard.modules.filter((module) => module.id !== id),
            },
        }));
    }, []);

    // =====================================================
    // Presets
    // =====================================================

    const applyPreset = useCallback((presetName) => {
        setSettings((prev) => ({
            ...prev,

            preferences: {
                ...prev.preferences,
                theme: presetName,
            },

            presets: {
                ...prev.presets,
                current: presetName,
            },
        }));
    }, []);

    const saveCustomPreset = useCallback(
        (presetName) => {
            const newPreset = {
                name: presetName,
                timestamp: Date.now(),
                data: structuredClone(settings),
            };

            setSettings((prev) => ({
                ...prev,
                presets: {
                    ...prev.presets,
                    custom: [...prev.presets.custom, newPreset],
                },
            }));
        },
        [settings],
    );

    const deleteCustomPreset = useCallback((presetName) => {
        setSettings((prev) => ({
            ...prev,
            presets: {
                ...prev.presets,
                custom: prev.presets.custom.filter((preset) => preset.name !== presetName),
            },
        }));
    }, []);

    // =====================================================
    // Reset
    // =====================================================

    const resetToDefaults = useCallback(() => {
        setSettings(DEFAULT_SETTINGS);
    }, []);

    return {
        settings,

        // Preferences
        updatePreference,

        // Dashboard
        updateLayoutSetting,
        addDashboardModule,
        updateDashboardModule,
        removeDashboardModule,

        // Module Defaults
        updateModuleDefault,

        // Presets
        applyPreset,
        saveCustomPreset,
        deleteCustomPreset,

        // Reset
        resetToDefaults,
    };
}

export function useSettings() {
    return useSettingsContext();
}
