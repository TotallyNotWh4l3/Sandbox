import { Settings } from "lucide-react";
import "./settings-button.css";
import { T } from "../../../contants/i18n";

export default function SettingsButton() {
    const LANG = T.en;
    return (
        <div>
            <button className="settings-button">
                <Settings size={16} />
                {LANG.dashboard.header.buttonCustomize.toUpperCase()}
            </button>
        </div>
    );
}
