// Settings.jsx

import { useState } from "react";
import { useSettings } from "../../hooks/useSettings";
import { useLanguage } from "../../hooks/useLanguage";

import SettingsSidebar from "./Sidebar/SettingsSidebar";
import SettingsContent from "./Content/SettingsContent";
import * as SettingsUI from "./Shared/SettingsComponents";

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

    const T = useLanguage();

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
            setAuthError(T.settings.auth.incorrectPassword);
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
                    <SettingsUI.Header>{T.settings.mainTitle}</SettingsUI.Header>

                    <button
                        className="settings__close-btn"
                        onClick={onClose}
                        aria-label={T.settings.close}
                    >
                        ✕
                    </button>
                </header>

                {/* Body */}
                <div className="settings__body">
                    {!isAuthenticated ? (
                        <div className="settings__auth">
                            <form onSubmit={handleAuthenticate} className="settings__auth-form">
                                <h2 className="settings__auth-title">{T.settings.auth.title}</h2>

                                <p className="settings__auth-description">
                                    {T.settings.auth.description}
                                </p>

                                <div className="settings__auth-group">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder={T.settings.auth.passwordPlaceholder}
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
                                    {T.settings.auth.unlockButton}
                                </button>

                                <p className="settings__auth-hint">{T.settings.auth.demoHint}</p>
                            </form>
                        </div>
                    ) : (
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
                                {T.settings.logout}
                            </button>

                            <span className="settings__footer-info">{T.settings.autoSave}</span>
                        </>
                    ) : (
                        <span className="settings__footer-info">{T.settings.readOnly}</span>
                    )}
                </footer>
            </div>
        </div>
    );
}
