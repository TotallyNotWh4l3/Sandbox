import "./settings-sidebar.css";

import { SETTINGS_TABS } from "../../../constants/settingsOption";
import { useLanguage } from "../../../hooks/useLanguage";

export default function SettingsSidebar({ activeTab, onTabChange }) {
    const T = useLanguage();

    return (
        <aside className="settings-sidebar">
            <nav className="settings-sidebar__nav">
                {SETTINGS_TABS.map((tab) => {
                    const Icon = tab.icon;

                    return (
                        <button
                            key={tab.id}
                            className={`settings-sidebar__tab ${
                                activeTab === tab.id ? "settings-sidebar__tab--active" : ""
                            }`}
                            onClick={() => onTabChange(tab.id)}
                            aria-selected={activeTab === tab.id}
                        >
                            <span className="settings-sidebar__icon">
                                <Icon size={16} />
                            </span>

                            <span className="settings-sidebar__label">
                                {T.settings.sidebar[tab.labelKey]}
                            </span>
                        </button>
                    );
                })}
            </nav>
        </aside>
    );
}
