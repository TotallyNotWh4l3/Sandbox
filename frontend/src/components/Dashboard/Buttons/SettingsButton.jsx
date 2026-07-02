// Functions
import { useState } from "react";

// Designs
import { Settings } from "lucide-react";

// JS
import { T } from "../../../contants/i18n";

// CSS
import "./settings-button.css";

export default function SettingsButton({ setIsOpen }) {
    return (
        <button className="settings-button" onClick={() => setIsOpen(true)}>
            Settings
        </button>
    );
}
