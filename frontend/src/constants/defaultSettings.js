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
