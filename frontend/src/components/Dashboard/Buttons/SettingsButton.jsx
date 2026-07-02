import { Settings } from "lucide-react";
import "./settings-button.css";
import { T } from "../../../contants/i18n";

export default function SettingsButton() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const LANG = T.en;

    function handleOnClick() {
        setIsSettingsOpen((prev) => !prev);
    }

    return (
        <div>
            <button
                className="settings-button"
                onClick={handleOnClick()}
            >
                <Settings size={16} />
                {LANG.dashboard.header.buttonCustomize.toUpperCase()}
            </button>
        </div>
    );
}
