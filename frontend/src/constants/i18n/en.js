// en.js
export default {
    dashboard: {
        header: {
            title: "Co:Efficient",
            subTitle: "Stay Updated",
        },
    },

    settings: {
        mainTitle: "Settings",
        close: "Close settings",
        logout: "Logout",
        autoSave: "Changes are saved automatically",
        readOnly: "Settings are read-only without authentication",
        sidebar: {
            theme: "Theme & Appearance",
            location: "Location & Language",
            grid: "Grid Layout",
            modules: "Module Settings",
            presets: "Presets",
        },

        theme: {
            title: "Theme & Appearance",
            presets: "Preset Themes",
            customization: "Customization",
            customizationDescription:
                "Fine-tuning of colors, fonts, and opacity will be available in a future update.",

            options: {
                darkDefault: "Dark (Default)",
                darkMinimal: "Dark (Minimal)",
                darkAccent: "Dark (Accent)",
                lightDefault: "Light (Default)",
                lightMinimal: "Light (Minimal)",
                lightAccent: "Light (Accent)",
            },
        },

        grid: {
            title: "Grid Layout",
            columns: "Number of Columns",
            columnsDescription: "How many modules should fit horizontally on the dashboard?",
            spacing: "Module Spacing",
            spacingDescription: "Adjust the gap between dashboard modules.",
            preview: "Preview",
            module: "Module",
            column: "Column",
            columnsPlural: "Columns",

            gapOptions: {
                tight: "Tight",
                normal: "Normal",
                spacious: "Spacious",
                extraSpacious: "Extra Spacious",
            },
        },

        location: {
            title: "Location & Language",
            location: "Location",
            language: "Language",
            dashboardLocation: "Dashboard Location (for weather)",
            placeholder: "e.g., Tokyo, New York",
            hint: "Enter a city name to update weather location",
        },

        modules: {
            title: "Module Settings",
            on: "On",
            off: "Off",

            names: {
                weather: "Weather",
                schedule: "Schedule",
                announcements: "Announcements",
                sound: "Sound",
            },

            descriptions: {
                weather: "Current weather and forecast settings.",
                schedule: "Upcoming events and timetable settings.",
                announcements: "Configure dashboard announcements.",
                sound: "Notification and alert settings.",
            },

            labels: {
                enabled: "Enabled",
                forecastDays: "Forecast Days",
                showAlerts: "Show Weather Alerts",
                viewMode: "View Mode",
                daysBeforeToday: "Days Before Today",
                maxDisplay: "Maximum Display",
                volume: "Volume",
                alertSound: "Alert Sound",
            },
            options: {
                relative: "Relative",
                absolute: "Absolute",
                default: "Default",
                chime: "Chime",
                bell: "Bell",
                none: "None",
            },
        },

        presets: {
            title: "Presets & Configuration",
            builtIn: "Built-in Presets",
            custom: "Your Custom Presets",
            saveCurrent: "Save Current Settings",
            saveAsCustom: "Save as Custom Preset",
            enterName: "Enter preset name...",
            save: "Save",
            cancel: "Cancel",
            reset: "Reset",
            resetButton: "Reset All Settings to Defaults",
            warning: "This will reset all settings to their default values.",
            deleteConfirm: 'Delete preset "{name}"?',
            resetConfirm: "Reset all settings to defaults? This cannot be undone.",
        },
        auth: {
            title: "Authentication Required",
            description: "Enter password to modify settings",
            passwordPlaceholder: "Enter password",
            unlockButton: "Unlock Settings",
            incorrectPassword: "Incorrect password",
            demoHint: '(Demo: use "admin" or "1234")',
        },
    },
};
