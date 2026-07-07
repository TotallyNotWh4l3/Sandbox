import "./settings-content.css";
import ThemeSettings from "../Pages/ThemeSettings";
import LocationLanguageSettings from "../Pages/LocationLanguageSettings";
import GridLayoutSettings from "../Pages/GridLayoutSettings";
import ModuleSettings from "../Pages/ModuleSettings";
import PresetsSettings from "../Pages/PresetSettings";

/**
 * SettingsContent Component
 * Renders the active settings page based on activeTab prop
 */
export default function SettingsContent({
    activeTab,
    settings,
    updateGlobalSetting,
    updateModuleSetting,
    applyPreset,
    saveCustomPreset,
    deleteCustomPreset,
    resetToDefaults,
}) {
    const renderContent = () => {
        switch (activeTab) {
            case "location":
                return (
                    <LocationLanguageSettings
                        settings={settings}
                        updateGlobalSetting={updateGlobalSetting}
                    />
                );
            case "theme":
                return (
                    <ThemeSettings settings={settings} updateGlobalSetting={updateGlobalSetting} />
                );
            case "grid":
                return (
                    <GridLayoutSettings
                        settings={settings}
                        updateGlobalSetting={updateGlobalSetting}
                    />
                );
            case "modules":
                return (
                    <ModuleSettings settings={settings} updateModuleSetting={updateModuleSetting} />
                );
            case "presets":
                return (
                    <PresetsSettings
                        settings={settings}
                        applyPreset={applyPreset}
                        saveCustomPreset={saveCustomPreset}
                        deleteCustomPreset={deleteCustomPreset}
                        resetToDefaults={resetToDefaults}
                    />
                );
            default:
                return <div>Select a settings tab</div>;
        }
    };

    return <main className="settings-content">{renderContent()}</main>;
}
