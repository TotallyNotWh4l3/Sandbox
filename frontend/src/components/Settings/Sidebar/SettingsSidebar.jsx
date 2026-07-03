import { useState } from "react";
import "./settings-sidebar.css";

const SETTINGS_TABS = [
    { id: "theme", label: "Theme & Appearance", icon: "🎨" },
    { id: "location", label: "Location & Language", icon: "🌍" },
    { id: "grid", label: "Grid Layout", icon: "📐" },
    { id: "modules", label: "Module Settings", icon: "🔧" },
    { id: "presets", label: "Presets", icon: "⭐" },
];

/**
 * SettingsSidebar Component
 * Navigation tabs for different settings pages
 */
export default function SettingsSidebar({ activeTab, onTabChange }) {
    return (
        <aside className="settings-sidebar">
            <nav className="settings-sidebar__nav">
                {SETTINGS_TABS.map((tab) => (
                    <button
                        key={tab.id}
                        className={`settings-sidebar__tab ${
                            activeTab === tab.id ? "settings-sidebar__tab--active" : ""
                        }`}
                        onClick={() => onTabChange(tab.id)}
                        aria-selected={activeTab === tab.id}
                    >
                        <span className="settings-sidebar__icon">{tab.icon}</span>
                        <span className="settings-sidebar__label">{tab.label}</span>
                    </button>
                ))}
            </nav>
        </aside>
    );
}
