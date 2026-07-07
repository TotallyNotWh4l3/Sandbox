import "./grid-layout-settings.css";

import { COLUMN_OPTIONS, GAP_OPTIONS } from "../../../constants/dashboardOptions";

import { useDashboard } from "../../../hooks/useDashboard";
import { useLanguage } from "../../../hooks/useLanguage";

import * as SettingsUI from "../Shared/SettingsComponents";

/**
 * GridLayoutSettings Component
 * Configure dashboard grid layout.
 */
export default function GridLayoutSettings() {
    const T = useLanguage();

    const { dashboard, updateLayout } = useDashboard();

    const currentColumns = dashboard.layout.columns;
    const currentGap = dashboard.layout.gap;

    const handleColumnsChange = (columns) => {
        updateLayout("columns", columns);
    };

    const handleGapChange = (gap) => {
        updateLayout("gap", gap);
    };

    return (
        <div className="grid-layout-settings">
            <SettingsUI.PageTitle>{T.settings.grid.title}</SettingsUI.PageTitle>

            {/* Columns */}
            <SettingsUI.Section>
                <SettingsUI.Header>{T.settings.grid.columns}</SettingsUI.Header>

                <SettingsUI.Instructions>
                    {T.settings.grid.columnsDescription}
                </SettingsUI.Instructions>

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
            </SettingsUI.Section>

            {/* Gap */}
            <SettingsUI.Section>
                <SettingsUI.Header>{T.settings.grid.spacing}</SettingsUI.Header>

                <SettingsUI.Instructions>
                    {T.settings.grid.spacingDescription}
                </SettingsUI.Instructions>

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
            </SettingsUI.Section>

            {/* Preview */}
            <SettingsUI.Section>
                <SettingsUI.Header>{T.settings.grid.preview}</SettingsUI.Header>

                <div
                    className="grid-layout-settings__preview"
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${currentColumns}, 1fr)`,
                        gap: `${currentGap}px`,
                    }}
                >
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="grid-layout-settings__preview-item">
                            {i + 1}
                        </div>
                    ))}
                </div>
            </SettingsUI.Section>
        </div>
    );
}
