// settingsOptions.js

export const COLUMN_OPTIONS = [2, 3, 4, 6];

export const GAP_OPTIONS = [
    { value: "0.5rem", label: "Tight" },
    { value: "1rem", label: "Normal" },
    { value: "1.5rem", label: "Spacious" },
    { value: "2rem", label: "Extra Spacious" },
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
    { id: "dark-default", label: "Dark (Default)", preview: "🌙" },
    { id: "dark-minimal", label: "Dark (Minimal)", preview: "⚫" },
    { id: "dark-accent", label: "Dark (Accent)", preview: "💜" },
    { id: "light-default", label: "Light (Default)", preview: "☀️" },
    { id: "light-minimal", label: "Light (Minimal)", preview: "⚪" },
    { id: "light-accent", label: "Light (Accent)", preview: "💛" },
];

export const LANGUAGE_OPTIONS = [
    { id: "en", label: "English" },
    { id: "ja", label: "日本語" },
    { id: "fr", label: "Français" },
    { id: "de", label: "Deutsch" },
];