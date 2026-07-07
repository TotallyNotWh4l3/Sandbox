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

export const DEFAULT_SETTINGS = {
    // =====================================================
    // Dashboard
    // =====================================================
    dashboard: {
        layout: {
            columns: 3,
            gap: 16,
            padding: 16,
        },

        modules: [],
    },

    // =====================================================
    // Preferences
    // =====================================================
    preferences: {
        language: "en",

        location: {
            name: "Tokyo",
            latitude: 35.6762,
            longitude: 139.6503,
        },

        appearance: {
            currentStyle: "dark-default",
        },
    },

    // =====================================================
    // Styles
    // =====================================================
    styles: [
        {
            id: "dark-default",
            name: "Dark Default",

            builtIn: true,

            basedOn: null,

            appearance: {
                colors: {},
                typography: {},
                borders: {},
                effects: {},
            },
        },

        {
            id: "light-default",
            name: "Light Default",

            builtIn: true,

            basedOn: null,

            appearance: {
                colors: {},
                typography: {},
                borders: {},
                effects: {},
            },
        },

        // Custom styles created by Admin / Manager
    ],

    // =====================================================
    // Module Defaults
    // =====================================================
    moduleDefaults: {
        weather: {
            title: "Weather",
            city: "Tokyo",
            view: "conditions",
        },

        schedule: {
            title: "Schedule",
        },

        announcement: {
            title: "Announcements",
        },
    },
};
