import "./theme-settings.css";

const THEME_OPTIONS = [
    { id: "dark-default", label: "Dark (Default)", preview: "🌙" },
    { id: "dark-minimal", label: "Dark (Minimal)", preview: "⚫" },
    { id: "dark-accent", label: "Dark (Accent)", preview: "💜" },
    { id: "light-default", label: "Light (Default)", preview: "☀️" },
    { id: "light-minimal", label: "Light (Minimal)", preview: "⚪" },
    { id: "light-accent", label: "Light (Accent)", preview: "💛" },
];

/**
 * ThemeSettings Component
 * Theme/appearance selection and customization
 */
export default function ThemeSettings({ settings, updateGlobalSetting }) {
    const currentTheme = settings.theme;

    const handleThemeChange = (themeId) => {
        updateGlobalSetting("theme", themeId);
    };

    return (
        <div className="theme-settings">
            <h2 className="theme-settings__title">Theme & Appearance</h2>

            <section className="theme-settings__section">
                <h3 className="theme-settings__subtitle">Preset Themes</h3>
                <div className="theme-settings__grid">
                    {THEME_OPTIONS.map((theme) => (
                        <button
                            key={theme.id}
                            className={`theme-settings__card ${
                                currentTheme === theme.id ? "theme-settings__card--active" : ""
                            }`}
                            onClick={() => handleThemeChange(theme.id)}
                            aria-pressed={currentTheme === theme.id}
                        >
                            <span className="theme-settings__preview">{theme.preview}</span>
                            <span className="theme-settings__label">{theme.label}</span>
                        </button>
                    ))}
                </div>
            </section>

            <section className="theme-settings__section">
                <h3 className="theme-settings__subtitle">Custom Color Options</h3>
                <div className="theme-settings__custom">
                    <p className="theme-settings__note">
                        Fine-tuning of colors, fonts, and opacity will be available in a future
                        update.
                    </p>
                </div>
            </section>
        </div>
    );
}
