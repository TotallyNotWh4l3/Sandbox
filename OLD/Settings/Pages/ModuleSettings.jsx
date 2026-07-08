import "./module-settings.css";

import { MODULE_CONFIG } from "../../../constants/moduleSettings";
import { useLanguage } from "../../../hooks/useLanguage";

import * as SettingsUI from "../Shared/SettingsComponents";
import SettingsSelect from "../Shared/SettingsSelect";

/**
 * ModuleSettings Component
 * Configure default values for modules.
 */
export default function ModuleSettings({ settings, updateModuleDefault }) {
    const T = useLanguage();

    const handleToggle = (moduleName, key) => {
        const currentValue = settings.moduleDefaults[moduleName][key];
        updateModuleDefault(moduleName, key, !currentValue);
    };

    const handleRangeChange = (moduleName, key, value) => {
        updateModuleDefault(moduleName, key, parseInt(value, 10));
    };

    const handleSelectChange = (moduleName, key, value) => {
        updateModuleDefault(moduleName, key, value);
    };

    const renderSettingControl = (moduleName, setting) => {
        const currentValue = settings.moduleDefaults[moduleName][setting.key];

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

                        <span className="module-settings__toggle-slider" />

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
                    <SettingsSelect
                        value={currentValue}
                        options={setting.options}
                        valueKey="value"
                        labelTransform={(option) => T.settings.modules.options[option.labelKey]}
                        onChange={(value) => handleSelectChange(moduleName, setting.key, value)}
                    />
                );

            default:
                return null;
        }
    };

    return (
        <div className="module-settings">
            <SettingsUI.PageTitle>{T.settings.modules.title}</SettingsUI.PageTitle>

            {MODULE_CONFIG.map((module) => (
                <SettingsUI.Section key={module.id} className="module-settings__module">
                    <SettingsUI.Header>
                        {T.settings.modules.names[module.nameKey]}
                    </SettingsUI.Header>

                    <SettingsUI.Instructions>
                        {T.settings.modules.descriptions[module.descriptionKey]}
                    </SettingsUI.Instructions>

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
                </SettingsUI.Section>
            ))}
        </div>
    );
}
