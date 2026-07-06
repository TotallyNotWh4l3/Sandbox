export const MODULE_CONFIG = [
    {
        id: "weather",
        name: "Weather",
        description: "Current weather, forecasts, and alerts",
        settings: [
            {
                key: "enabled",
                label: "Enable Module",
                type: "toggle",
            },
            {
                key: "forecastDays",
                label: "Forecast Days",
                type: "range",
                min: 1,
                max: 14,
            },
            {
                key: "showAlerts",
                label: "Show Weather Alerts",
                type: "toggle",
            },
        ],
    },
    {
        id: "schedule",
        name: "Schedule",
        description: "Calendar and event management",
        settings: [
            {
                key: "enabled",
                label: "Enable Module",
                type: "toggle",
            },
            {
                key: "viewMode",
                label: "View Mode",
                type: "select",
                options: [
                    { value: "absolute", label: "Absolute (Fixed Month)" },
                    { value: "relative", label: "Relative (Rolling Window)" },
                ],
            },
        ],
    },
    {
        id: "announcements",
        name: "Announcements & Alerts",
        description: "Display notifications and announcements",
        settings: [
            {
                key: "enabled",
                label: "Enable Module",
                type: "toggle",
            },
            {
                key: "maxDisplay",
                label: "Max Display Items",
                type: "range",
                min: 1,
                max: 10,
            },
        ],
    },
    {
        id: "sound",
        name: "Sound & Alerts",
        description: "Audio notifications and alert sounds",
        settings: [
            {
                key: "enabled",
                label: "Enable Sound",
                type: "toggle",
            },
            {
                key: "volume",
                label: "Volume",
                type: "range",
                min: 0,
                max: 100,
            },
        ],
    },
];
