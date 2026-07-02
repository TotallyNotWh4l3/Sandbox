import { useState } from "react";
import "./settings.css";

export default function Settings() {

    return (
        <div className="settings">
            <header className="settings__header">
                Header
            </header>

            <div className="settings__body">
                <aside className="settings__sidebar">
                    Aside
                </aside>

                <main className="settings__content">
                    Main
                </main>
            </div>

            <footer className="settings__footer">
                Footer
            </footer>
        </div>
    );
}
