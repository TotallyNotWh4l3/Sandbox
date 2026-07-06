import "./settings-shared.css";
import { Info } from "lucide-react";

/**
 * Reusable section heading.
 */
export default function SettingsSectionHeader({ title, description }) {
    return (
        <div className="settings-section-header">
            <h3 className="settings-section-header__title">{title}</h3>

            {description &&
                <p className="settings-section-header__info">
                    <span className="settings-section-header__icon">
                        <Info size={16} />
                    </span>
                    <span  className="settings-section-header__description">
                        {description}
                    </span>
                </p>}
        </div>
    );
}
