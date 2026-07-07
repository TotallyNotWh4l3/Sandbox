// =====================================================
// Dashboard Options
// =====================================================

export const COLUMN_OPTIONS = [2, 3, 4, 6];

export const GAP_OPTIONS = [
    { value: 8, labelKey: "tight" },
    { value: 16, labelKey: "normal" },
    { value: 24, labelKey: "spacious" },
    { value: 32, labelKey: "extraSpacious" },
];

// =====================================================
// Default Dashboard
// =====================================================

export const DEFAULT_DASHBOARD = {
    id: "default-dashboard",

    name: "Main Dashboard",

    layout: {
        columns: 3,
        gap: 16,
        padding: 16,
    },

    modules: [
        {
            id: "weather-default",
            type: "weather",
            settings: {
                title: "Weather",
                city: "Tokyo",
                view: "conditions",
            },
            layout: {
                w: 2,
                h: 2,
            },
        },
    ],
};
