import "./module-settings.css";

import { MODULE_CONFIG } from "../../../constants/moduleSettings";
import { useLanguage } from "../../../hooks/useLanguage";

/**
 * ModuleSettings Component
 * Enable/disable modules and configure module-specific settings
 */
export default function ModuleSettings({ settings, updateModuleSetting }) {
    const T = useLanguage();

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
                            {currentValue ? T.settings.modules.on : T.settings.modules.off}
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
                                {T.settings.modules.options[option.labelKey]}
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
            <h2 className="module-settings__title">{T.settings.modules.title}</h2>

            {MODULE_CONFIG.map((module) => (
                <section key={module.id} className="module-settings__module">
                    <div className="module-settings__header">
                        <h3 className="module-settings__module-name">
                            {T.settings.modules.names[module.nameKey]}
                        </h3>

                        <p className="module-settings__module-description">
                            {T.settings.modules.descriptions[module.descriptionKey]}
                        </p>
                    </div>

                    <div className="module-settings__controls">
                        {module.settings.map((setting) => (
                            <div key={setting.key} className="module-settings__control-group">
                                <label className="module-settings__label">
                                    {T.settings.modules.labels[setting.labelKey]}
                                </label>

                                {renderSettingControl(module.id, setting)}
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
