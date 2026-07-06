import "./grid-layout-settings.css";

import { COLUMN_OPTIONS, GAP_OPTIONS } from "../../../constants/settingsOption";
import { useLanguage } from "../../../hooks/useLanguage";

import SettingsPageTitle from "../Shared/SettingsPageTitle";
import SettingsSection from "../Shared/SettingsSection";

/**
 * GridLayoutSettings Component
 * Configure dashboard grid layout (columns, gaps)
 */
export default function GridLayoutSettings({ settings, updateGlobalSetting }) {
    const T = useLanguage();

    const currentColumns = settings.gridColumns;
    const currentGap = settings.moduleGaps;

    const handleColumnsChange = (columns) => {
        updateGlobalSetting("gridColumns", columns);
    };

    const handleGapChange = (gap) => {
        updateGlobalSetting("moduleGaps", gap);
    };

    return (
        <div className="grid-layout-settings">
            <SettingsPageTitle>{T.settings.grid.title}</SettingsPageTitle>

            <SettingsSection
                title={T.settings.grid.columns}
                description={T.settings.grid.columnsDescription}
            >
                <div className="grid-layout-settings__options">
                    {COLUMN_OPTIONS.map((cols) => (
                        <button
                            key={cols}
                            className={`grid-layout-settings__button ${
                                currentColumns === cols
                                    ? "grid-layout-settings__button--active"
                                    : ""
                            }`}
                            onClick={() => handleColumnsChange(cols)}
                            aria-pressed={currentColumns === cols}
                        >
                            {cols}{" "}
                            {cols === 1 ? T.settings.grid.column : T.settings.grid.columnsPlural}
                        </button>
                    ))}
                </div>
            </SettingsSection>

            <SettingsSection
                title={T.settings.grid.spacing}
                description={T.settings.grid.spacingDescription}
            >
                <div className="grid-layout-settings__gap-options">
                    {GAP_OPTIONS.map((option) => (
                        <button
                            key={option.value}
                            className={`grid-layout-settings__gap-button ${
                                currentGap === option.value
                                    ? "grid-layout-settings__gap-button--active"
                                    : ""
                            }`}
                            onClick={() => handleGapChange(option.value)}
                            aria-pressed={currentGap === option.value}
                        >
                            <span>{T.settings.grid.gapOptions[option.labelKey]}</span>
                        </button>
                    ))}
                </div>
            </SettingsSection>

            <SettingsSection title={T.settings.grid.preview}>
                <div
                    className="grid-layout-settings__preview"
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${currentColumns}, 1fr)`,
                        gap: currentGap,
                    }}
                >
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="grid-layout-settings__preview-item">
                            {i + 1}
                        </div>
                    ))}
                </div>
            </SettingsSection>
        </div>
    );
}
