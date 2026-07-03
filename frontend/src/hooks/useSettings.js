import { useState, useEffect, useCallback } from "react";

const DEFAULT_SETTINGS = {
    // Global/Theme Settings
    theme: "dark-default", // dark-default, dark-minimal, dark-accent, light-default, light-minimal, light-accent
    language: "en", // en, ja, etc.
    location: { name: "Tokyo", lat: 35.6762, lng: 139.6503 },

    // Grid Layout Settings
    gridColumns: 3,
    moduleGaps: "1rem",

    // Module-specific Settings (Local Variables)
    modules: {
        weather: {
            enabled: true,
            forecastDays: 7,
            showAlerts: true,
        },
        schedule: {
            enabled: true,
            viewMode: "relative", // absolute or relative
            daysBeforeToday: 0,
        },
        announcements: {
            enabled: true,
            maxDisplay: 5,
        },
        sound: {
            enabled: true,
            volume: 50, // 0-100
            alertSound: "default",
        },
    },

    // Preset info
    currentPreset: "dark-default",
    customPresets: [],
};

/**
 * useSettings Hook
 * Manages global dashboard settings with localStorage persistence
 */
export function useSettings() {
    const [settings, setSettings] = useState(() => {
        // Load from localStorage or use defaults
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

    // Update global setting
    const updateGlobalSetting = useCallback((key, value) => {
        setSettings((prev) => ({
            ...prev,
            [key]: value,
        }));
    }, []);

    // Update module-specific setting
    const updateModuleSetting = useCallback((moduleName, key, value) => {
        setSettings((prev) => ({
            ...prev,
            modules: {
                ...prev.modules,
                [moduleName]: {
                    ...prev.modules[moduleName],
                    [key]: value,
                },
            },
        }));
    }, []);

    // Apply a preset theme
    const applyPreset = useCallback((presetName) => {
        // This would normally load preset data from a backend/config
        setSettings((prev) => ({
            ...prev,
            theme: presetName,
            currentPreset: presetName,
        }));
    }, []);

    // Save current settings as a custom preset
    const saveCustomPreset = useCallback(
        (presetName) => {
            const newPreset = {
                name: presetName,
                timestamp: Date.now(),
                data: { ...settings },
            };

            setSettings((prev) => ({
                ...prev,
                customPresets: [...prev.customPresets, newPreset],
            }));
        },
        [settings],
    );

    // Delete a custom preset
    const deleteCustomPreset = useCallback((presetName) => {
        setSettings((prev) => ({
            ...prev,
            customPresets: prev.customPresets.filter((p) => p.name !== presetName),
        }));
    }, []);

    // Reset to defaults
    const resetToDefaults = useCallback(() => {
        setSettings(DEFAULT_SETTINGS);
    }, []);

    return {
        settings,
        updateGlobalSetting,
        updateModuleSetting,
        applyPreset,
        saveCustomPreset,
        deleteCustomPreset,
        resetToDefaults,
    };
}
