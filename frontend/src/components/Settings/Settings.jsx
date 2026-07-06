// Settings.jsx

import { useState } from "react";
import { useSettings } from "../../hooks/useSettings";
import SettingsSidebar from "./Sidebar/SettingsSidebar";
import SettingsContent from "./Content/SettingsContent";
import "./settings.css";

/**
 * Settings Component
 * Main modal wrapper for all dashboard settings
 * Handles authentication, state management, and layout
 */
export default function Settings({ onClose }) {
    const [activeTab, setActiveTab] = useState("theme");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [authError, setAuthError] = useState("");

    // Load settings from hook
    const {
        settings,
        updateGlobalSetting,
        updateModuleSetting,
        applyPreset,
        saveCustomPreset,
        deleteCustomPreset,
        resetToDefaults,
    } = useSettings();

    // Simple password authentication (in real app, would validate against backend)
    const handleAuthenticate = (e) => {
        e.preventDefault();
        // TODO: Replace with actual backend authentication
        if (password === "admin" || password === "1234") {
            setIsAuthenticated(true);
            setAuthError("");
        } else {
            setAuthError("Incorrect password");
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setPassword("");
        setAuthError("");
    };

    return (
        <div className="settings-overlay" onClick={onClose}>
            <div className="settings" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <header className="settings__header">
                    <h1 className="settings__title">Settings</h1>
                    <button
                        className="settings__close-btn"
                        onClick={onClose}
                        aria-label="Close settings"
                    >
                        ✕
                    </button>
                </header>

                {/* Body */}
                <div className="settings__body">
                    {!isAuthenticated ? (
                        // Authentication Form
                        <div className="settings__auth">
                            <form onSubmit={handleAuthenticate} className="settings__auth-form">
                                <h2 className="settings__auth-title">Authentication Required</h2>
                                <p className="settings__auth-description">
                                    Enter password to modify settings
                                </p>

                                <div className="settings__auth-group">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter password"
                                        className="settings__auth-input"
                                        autoFocus
                                    />
                                    {authError && (
                                        <p className="settings__auth-error">{authError}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="settings__auth-button"
                                    disabled={!password}
                                >
                                    Unlock Settings
                                </button>

                                <p className="settings__auth-hint">(Demo: use "admin" or "1234")</p>
                            </form>
                        </div>
                    ) : (
                        // Settings Interface
                        <>
                            <SettingsSidebar activeTab={activeTab} onTabChange={setActiveTab} />
                            <SettingsContent
                                activeTab={activeTab}
                                settings={settings}
                                updateGlobalSetting={updateGlobalSetting}
                                updateModuleSetting={updateModuleSetting}
                                applyPreset={applyPreset}
                                saveCustomPreset={saveCustomPreset}
                                deleteCustomPreset={deleteCustomPreset}
                                resetToDefaults={resetToDefaults}
                            />
                        </>
                    )}
                </div>

                {/* Footer */}
                <footer className="settings__footer">
                    {isAuthenticated ? (
                        <>
                            <button onClick={handleLogout} className="settings__logout-btn">
                                Logout
                            </button>
                            <span className="settings__footer-info">
                                Changes are saved automatically
                            </span>
                        </>
                    ) : (
                        <span className="settings__footer-info">
                            Settings are read-only without authentication
                        </span>
                    )}
                </footer>
            </div>
        </div>
    );
}
