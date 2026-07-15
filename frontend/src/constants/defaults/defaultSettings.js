import { DEFAULT_THEMES } from "../themes";

export const DEFAULT_SETTINGS = {
    // =====================================================
    // Preferences
    // =====================================================
    preferences: {
        language: "en",

        preferences: {
            locationId: "default-location",
        },

        appearance: {
            currentTheme: "dark-default",
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
    // THEMES
    // =====================================================
    themes: DEFAULT_THEMES,

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
