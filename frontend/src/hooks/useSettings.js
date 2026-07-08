import { useState, useEffect, useCallback } from "react";
import { useSettingsContext } from "../context/SettingsContext";
import { DEFAULT_SETTINGS } from "../constants/defaults/defaultSettings";

/**
 * useSettings Hook
 * Manages application settings with localStorage persistence.
 */
export function useSettingsState() {
    const [settings, setSettings] = useState(() => {
        try {
            const stored = localStorage.getItem("co-efficient-settings");

            if (!stored) {
                return structuredClone(DEFAULT_SETTINGS);
            }

            const parsed = JSON.parse(stored);

            return {
                ...structuredClone(DEFAULT_SETTINGS),
                ...parsed,

                preferences: {
                    ...DEFAULT_SETTINGS.preferences,
                    ...parsed.preferences,
                },

                styles: parsed.styles ?? DEFAULT_SETTINGS.styles,

                moduleDefaults: parsed.moduleDefaults ?? DEFAULT_SETTINGS.moduleDefaults,
            };
        } catch (e) {
            console.error("Failed to load settings:", e);
            return structuredClone(DEFAULT_SETTINGS);
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem("co-efficient-settings", JSON.stringify(settings));
        } catch (e) {
            console.error("Failed to save settings:", e);
        }
    }, [settings]);

    const updateSetting = useCallback((path, value) => {
        setSettings((prev) => {
            const updated = structuredClone(prev);

            const keys = path.split(".");
            let current = updated;

            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]];
            }

            current[keys[keys.length - 1]] = value;

            return updated;
        });
    }, []);

    // =====================================================
    // Preferences
    // =====================================================

    const updatePreference = useCallback(
        (path, value) => {
            updateSetting(`preferences.${path}`, value);
        },
        [updateSetting],
    );

    // =====================================================
    // Module Defaults
    // =====================================================

    const updateModuleDefault = useCallback(
        (moduleType, key, value) => {
            updateSetting(`moduleDefaults.${moduleType}.${key}`, value);
        },
        [updateSetting],
    );

    // =====================================================
    // Styles
    // =====================================================

    const applyStyle = useCallback(
        (styleId) => {
            updateSetting("preferences.appearance.currentStyle", styleId);
        },
        [updateSetting],
    );
    const saveStyle = useCallback((style) => {
        setSettings((prev) => ({
            ...prev,
            styles: [...prev.styles, style],
        }));
    }, []);

    const updateStyle = useCallback((id, updates) => {
        setSettings((prev) => ({
            ...prev,
            styles: prev.styles.map((style) =>
                style.id === id ? { ...style, ...updates } : style,
            ),
        }));
    }, []);

    const deleteStyle = useCallback((id) => {
        setSettings((prev) => ({
            ...prev,
            styles: prev.styles.filter((style) => style.id !== id),
        }));
    }, []);

    // =====================================================
    // Reset
    // =====================================================

    const resetToDefaults = useCallback(() => {
        setSettings(structuredClone(DEFAULT_SETTINGS));
    }, []);

    //

    const getSetting = useCallback(
        (path) => {
            return path.split(".").reduce((obj, key) => obj?.[key], settings);
        },
        [settings],
    );

    return {
        settings,

        updateSetting,

        updatePreference,
        updateModuleDefault,

        applyStyle,

        saveStyle,
        updateStyle,
        deleteStyle,

        resetToDefaults,

        getSetting
    };
}

export function useSettings() {
    return useSettingsContext();
}
