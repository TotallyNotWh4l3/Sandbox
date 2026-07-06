import "./settings-shared.css";

import { CircleHelp } from "lucide-react";

/**
 * Reusable instruction/info block.
 */
export default function SettingsInstruction({ children, icon: Icon = CircleHelp }) {
    return (
        <p className="settings-instruction">
            <span className="settings-instruction__icon">
                <Icon size={16} />
            </span>

            <span className="settings-instruction__text">{children}</span>
        </p>
    );
}
