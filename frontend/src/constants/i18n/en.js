// en.js
export default {
    dashboard: {
        header: {
            title: "Co:Efficient",
            subTitle: "Stay Updated",
        },
    },

    settings: {
        // =====================================================
        // General
        // =====================================================

        title: "Settings",
        autoSave: "Changes are saved automatically.",

        // =====================================================
        // Sidebar
        // =====================================================

        sidebar: {
            interface: "Interface",
            dashboard: "Dashboard",
            modules: "Modules",
            about: "About",
        },

        // =====================================================
        // Interface
        // =====================================================

        interface: {
            title: "Interface",
            description: "Customize the appearance and language of the application.",

            language: {
                title: "Language",
                description: "Choose the language used throughout the application.",
            },

            presets: {
                title: "Presets",
                description: "Choose one of the built-in presets or create your own.",

                create: "Create Preset",
                advanced: "Advanced Customization",
            },
        },

        // =====================================================
        // Dashboard
        // =====================================================

        dashboard: {
            title: "Dashboard",
            description: "Configure the default layout for newly created dashboards.",

            layout: {
                title: "Layout",
                description: "Adjust the spacing and number of columns.",

                columns: "Columns",
                gap: "Spacing",
                padding: "Padding",
            },
        },

        // =====================================================
        // Modules
        // =====================================================

        modules: {
            title: "Modules",
            description: "Configure the default behavior of each module.",

            weather: {
                title: "Weather",
            },

            schedule: {
                title: "Schedule",
            },

            announcements: {
                title: "Announcements",
            },
        },

        // =====================================================
        // About
        // =====================================================

        about: {
            title: "About",
            description: "Application information and credits.",
        },
    },
};
