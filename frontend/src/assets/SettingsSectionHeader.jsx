import "./settings-section-header.css";

/**
 * Reusable section heading for settings pages.
 */
export default function SettingsSectionHeader({ title, description, className = "" }) {
    return (
        <div className={`settings-section-header ${className}`}>
            <h3 className="settings-section-header__title">{title}</h3>

            {description && <p className="settings-section-header__description">{description}</p>}
        </div>
    );
}
