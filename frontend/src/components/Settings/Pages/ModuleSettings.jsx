import "./module-settings.css";

const MODULE_CONFIG = [
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

/**
 * ModuleSettings Component
 * Enable/disable modules and configure module-specific settings
 */
export default function ModuleSettings({ settings, updateModuleSetting }) {
    const handleToggle = (moduleName, key) => {
        const currentValue = settings.modules[moduleName][key];
        updateModuleSetting(moduleName, key, !currentValue);
    };

    const handleRangeChange = (moduleName, key, value) => {
        updateModuleSetting(moduleName, key, parseInt(value));
    };

    const handleSelectChange = (moduleName, key, value) => {
        updateModuleSetting(moduleName, key, value);
    };

    const renderSettingControl = (moduleName, setting) => {
        const currentValue = settings.modules[moduleName][setting.key];

        switch (setting.type) {
            case "toggle":
                return (
                    <label className="module-settings__toggle-label">
                        <input
                            type="checkbox"
                            checked={currentValue}
                            onChange={() => handleToggle(moduleName, setting.key)}
                            className="module-settings__toggle-input"
                        />
                        <span className="module-settings__toggle-slider"></span>
                        <span className="module-settings__toggle-text">
                            {currentValue ? "On" : "Off"}
                        </span>
                    </label>
                );

            case "range":
                return (
                    <div className="module-settings__range-group">
                        <input
                            type="range"
                            min={setting.min}
                            max={setting.max}
                            value={currentValue}
                            onChange={(e) =>
                                handleRangeChange(moduleName, setting.key, e.target.value)
                            }
                            className="module-settings__range"
                        />
                        <span className="module-settings__range-value">{currentValue}</span>
                    </div>
                );

            case "select":
                return (
                    <select
                        value={currentValue}
                        onChange={(e) =>
                            handleSelectChange(moduleName, setting.key, e.target.value)
                        }
                        className="module-settings__select"
                    >
                        {setting.options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                );

            default:
                return null;
        }
    };

    return (
        <div className="module-settings">
            <h2 className="module-settings__title">Module Settings</h2>

            {MODULE_CONFIG.map((module) => (
                <section key={module.id} className="module-settings__module">
                    <div className="module-settings__header">
                        <h3 className="module-settings__module-name">{module.name}</h3>
                        <p className="module-settings__module-description">{module.description}</p>
                    </div>

                    <div className="module-settings__controls">
                        {module.settings.map((setting) => (
                            <div key={setting.key} className="module-settings__control-group">
                                <label className="module-settings__label">{setting.label}</label>
                                {renderSettingControl(module.id, setting)}
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
