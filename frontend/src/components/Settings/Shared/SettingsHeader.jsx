import "./settings-shared.css";
import { Info } from "lucide-react";

/**
 * Reusable title + description header.
 */
export default function SettingsHeader({ title, description, icon: Icon = Info, titleLevel = 3 }) {
    const Title = `h${titleLevel}`;

    return (
        <div className="settings-header">
            <Title className="settings-header__title">
                {Icon && (
                    <span className="settings-header__icon">
                        <Icon size={18} />
                    </span>
                )}

                <span>{title}</span>
            </Title>

            {description && <p className="settings-header__description">{description}</p>}
        </div>
    );
}
