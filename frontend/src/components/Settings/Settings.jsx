import { useState } from "react";
import "./settings.css";

export default function Settings({ onClose }) {
    return (
        <div className="settings-overlay" onClick={onClose}>
            <div className="settings" onClick={(e) => e.stopPropagation()}>
                <header className="settings__header">Settings</header>

                <div className="settings__body">
                    <aside className="settings__sidebar">Aside</aside>
                    <main className="settings__content">Main</main>
                </div>

                <footer className="settings__footer">Footer</footer>
            </div>
        </div>
    );
}
