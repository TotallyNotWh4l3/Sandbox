import "./settings-shared.css";

import SettingsSectionHeader from "./SettingsSectionHeader";

/**
 * Standard settings section.
 */
export default function SettingsSection({ title, description, children, className = "" }) {
    return (
        <section className={`settings-section ${className}`}>
            {(title || description) && (
                <SettingsSectionHeader title={title} description={description} />
            )}

            <div className="settings-section__content">{children}</div>
        </section>
    );
}
