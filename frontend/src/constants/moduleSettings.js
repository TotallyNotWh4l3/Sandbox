// constants/moduleSettings.js

export const MODULE_CONFIG = [
    {
        id: "weather",
        nameKey: "weather",
        descriptionKey: "weather",

        settings: [
            {
                key: "enabled",
                labelKey: "enabled",
                type: "toggle",
            },
            {
                key: "forecastDays",
                labelKey: "forecastDays",
                type: "range",
                min: 1,
                max: 14,
            },
            {
                key: "showAlerts",
                labelKey: "showAlerts",
                type: "toggle",
            },
        ],
    },

    {
        id: "schedule",
        nameKey: "schedule",
        descriptionKey: "schedule",

        settings: [
            {
                key: "enabled",
                labelKey: "enabled",
                type: "toggle",
            },
            {
                key: "viewMode",
                labelKey: "viewMode",
                type: "select",
                options: [
                    {
                        value: "relative",
                        labelKey: "relative",
                    },
                    {
                        value: "absolute",
                        labelKey: "absolute",
                    },
                ],
            },
            {
                key: "daysBeforeToday",
                labelKey: "daysBeforeToday",
                type: "range",
                min: 0,
                max: 7,
            },
        ],
    },

    {
        id: "announcements",
        nameKey: "announcements",
        descriptionKey: "announcements",

        settings: [
            {
                key: "enabled",
                labelKey: "enabled",
                type: "toggle",
            },
            {
                key: "maxDisplay",
                labelKey: "maxDisplay",
                type: "range",
                min: 1,
                max: 10,
            },
        ],
    },

    {
        id: "sound",
        nameKey: "sound",
        descriptionKey: "sound",

        settings: [
            {
                key: "enabled",
                labelKey: "enabled",
                type: "toggle",
            },
            {
                key: "volume",
                labelKey: "volume",
                type: "range",
                min: 0,
                max: 100,
            },
            {
                key: "alertSound",
                labelKey: "alertSound",
                type: "select",
                options: [
                    {
                        value: "default",
                        labelKey: "default",
                    },
                    {
                        value: "chime",
                        labelKey: "chime",
                    },
                    {
                        value: "bell",
                        labelKey: "bell",
                    },
                    {
                        value: "none",
                        labelKey: "none",
                    },
                ],
            },
        ],
    },
];
