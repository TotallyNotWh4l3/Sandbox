export const DEFAULT_SETTINGS = {
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
    // Locations
    // =====================================================
    locations: [
        {
            id: "default-location",
            name: "Tokyo, Shibuya",
            latitude: 35.661991,
            longitude: 139.704138,
            builtIn: true,
        },
    ],

    // =====================================================
    // Styles
    // =====================================================
    styles: [
        // DARK THEME
        {
            id: "dark-default",
            name: "Dark Default",
            builtIn: true,

            appearance: {
                colors: {
                    accent: "#7c3aed",
                    accentHover: "#8b5cf6",
                    accentActive: "#6d28d9",
                    accentMuted: "rgba(124,58,237,0.15)",
                    accentBorder: "rgba(124,58,237,0.35)",

                    bg: "#090b13",
                    bgElevated: "#0e1220",
                    surface: "#151a2d",
                    surfaceElevated: "#1b2138",
                    surfaceFloating: "#222943",

                    element: "#151a2d",
                    elementHover: "#1a2036",
                    elementActive: "#232b47",
                    elementSelected: "rgba(124,58,237,0.18)",
                    elementDisabled: "rgba(255,255,255,0.04)",

                    border: "rgba(255,255,255,0.08)",
                    borderHover: "rgba(124,58,237,0.35)",
                    borderActive: "rgba(124,58,237,0.65)",
                    borderFocus: "#8b5cf6",

                    text: "#f8fafc",
                    textSecondary: "#b8c0d9",
                    textMuted: "#7e87a7",
                    textDisabled: "#5b6380",
                    textAccent: "#a78bfa",

                    inputBg: "#0e1220",
                    inputHover: "#151a2d",
                    inputFocus: "#1b2138",
                    inputDisabled: "#090b13",
                },

                interactive: {
                    hover: "#1a2036",
                    active: "#232b47",
                    focus: "rgba(139,92,246,0.35)",
                    selected: "rgba(124,58,237,0.25)",
                },

                shadows: {
                    sm: "0 2px 8px rgba(0,0,0,0.25)",
                    md: "0 8px 24px rgba(0,0,0,0.35)",
                    lg: "0 16px 40px rgba(0,0,0,0.45)",
                },
            },
        },
        // LIGHT THEME
        {
            id: "light-default",
            name: "Light Default",
            builtIn: true,

            appearance: {
                colors: {
                    accent: "#7c3aed",
                    accentHover: "#6d28d9",
                    accentActive: "#5b21b6",
                    accentMuted: "rgba(124,58,237,0.08)",
                    accentBorder: "rgba(124,58,237,0.25)",

                    bg: "#f8fafc",
                    bgElevated: "#f1f5f9",
                    surface: "#ffffff",
                    surfaceElevated: "#f8fafc",
                    surfaceFloating: "#ffffff",

                    element: "#ffffff",
                    elementHover: "#f1f5f9",
                    elementActive: "#e2e8f0",
                    elementSelected: "rgba(124,58,237,0.1)",
                    elementDisabled: "rgba(0,0,0,0.04)",

                    border: "rgba(0,0,0,0.08)",
                    borderHover: "rgba(124,58,237,0.35)",
                    borderActive: "rgba(124,58,237,0.65)",
                    borderFocus: "#7c3aed",

                    text: "#0f172a",
                    textSecondary: "#475569",
                    textMuted: "#64748b",
                    textDisabled: "#94a3b8",
                    textAccent: "#6d28d9",

                    inputBg: "#f1f5f9",
                    inputHover: "#e2e8f0",
                    inputFocus: "#ffffff",
                    inputDisabled: "#f8fafc",
                },

                interactive: {
                    hover: "#f1f5f9",
                    active: "#e2e8f0",
                    focus: "rgba(124,58,237,0.25)",
                    selected: "rgba(124,58,237,0.15)",
                },

                shadows: {
                    sm: "0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)",
                    md: "0 4px 12px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05)",
                    lg: "0 12px 24px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.04)",
                },
            },
        },
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
