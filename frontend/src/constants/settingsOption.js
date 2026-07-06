// settingsOptions.js

export const COLUMN_OPTIONS = [2, 3, 4, 6];

export const GAP_OPTIONS = [
    { value: "0.5rem", labelKey: "tight" },
    { value: "1rem", labelKey: "normal" },
    { value: "1.5rem", labelKey: "spacious" },
    { value: "2rem", labelKey: "extraSpacious" },
];

export const DEFAULT_PRESETS = [
    { id: "dark-default", name: "Dark (Default)", type: "default" },
    { id: "dark-minimal", name: "Dark (Minimal)", type: "default" },
    { id: "dark-accent", name: "Dark (Accent)", type: "default" },
    { id: "light-default", name: "Light (Default)", type: "default" },
    { id: "light-minimal", name: "Light (Minimal)", type: "default" },
    { id: "light-accent", name: "Light (Accent)", type: "default" },
];

export const THEME_OPTIONS = [
    {
        id: "dark-default",
        labelKey: "darkDefault",
        preview: "🌙",
    },
    {
        id: "dark-minimal",
        labelKey: "darkMinimal",
        preview: "⚫",
    },
    {
        id: "dark-accent",
        labelKey: "darkAccent",
        preview: "💜",
    },
    {
        id: "light-default",
        labelKey: "lightDefault",
        preview: "☀️",
    },
    {
        id: "light-minimal",
        labelKey: "lightMinimal",
        preview: "⚪",
    },
    {
        id: "light-accent",
        labelKey: "lightAccent",
        preview: "💛",
    },
];

export const LANGUAGE_OPTIONS = [
    { id: "en", label: "English" },
    { id: "ja", label: "日本語" },
];

export const DEFAULT_SETTINGS = {
    // Global/Theme Settings
    theme: "dark-default", // dark-default, dark-minimal, dark-accent, light-default, light-minimal, light-accent
    language: "ja", // en, ja, etc.
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

import { Palette, Globe, LayoutGrid, Blocks, Star } from "lucide-react";

export const SETTINGS_TABS = [
    {
        id: "theme",
        labelKey: "theme",
        icon: Palette,
    },
    {
        id: "location",
        labelKey: "location",
        icon: Globe,
    },
    {
        id: "grid",
        labelKey: "grid",
        icon: LayoutGrid,
    },
    {
        id: "modules",
        labelKey: "modules",
        icon: Blocks,
    },
    {
        id: "presets",
        labelKey: "presets",
        icon: Star,
    },
];
