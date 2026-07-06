// Functions
import { useState } from "react";

// Designs
import { Settings } from "lucide-react";

// CSS
import "./settings-button.css";

export default function SettingsButton({ setIsOpen }) {
    return (
        <button className="settings-button" onClick={() => setIsOpen(true)}>
            <Settings size={16}/>
            Settings
        </button>
    );
}
