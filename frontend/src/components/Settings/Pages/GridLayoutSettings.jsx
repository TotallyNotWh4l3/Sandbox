import "./grid-layout-settings.css";

const COLUMN_OPTIONS = [2, 3, 4, 6];
const GAP_OPTIONS = [
    { value: "0.5rem", label: "Tight" },
    { value: "1rem", label: "Normal" },
    { value: "1.5rem", label: "Spacious" },
    { value: "2rem", label: "Extra Spacious" },
];

/**
 * GridLayoutSettings Component
 * Configure dashboard grid layout (columns, gaps)
 */
export default function GridLayoutSettings({ settings, updateGlobalSetting }) {
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
            <h2 className="grid-layout-settings__title">Grid Layout</h2>

            <section className="grid-layout-settings__section">
                <h3 className="grid-layout-settings__subtitle">Number of Columns</h3>
                <p className="grid-layout-settings__description">
                    How many modules should fit horizontally on the dashboard?
                </p>
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
                            {cols} Column{cols > 1 ? "s" : ""}
                        </button>
                    ))}
                </div>
            </section>

            <section className="grid-layout-settings__section">
                <h3 className="grid-layout-settings__subtitle">Module Spacing</h3>
                <p className="grid-layout-settings__description">
                    Adjust the gap between dashboard modules.
                </p>
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
                            <span>{option.label}</span>
                        </button>
                    ))}
                </div>
            </section>

            <section className="grid-layout-settings__section">
                <h3 className="grid-layout-settings__subtitle">Preview</h3>
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
                            Module {i + 1}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
