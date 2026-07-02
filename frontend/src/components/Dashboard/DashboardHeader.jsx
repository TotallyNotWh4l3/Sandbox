import React, { useState } from "react";
import { Layers } from "lucide-react";
import { LinearGradient } from "react-text-gradients";

// Components
import SettingsButton from "./Buttons/SettingsButton";
import UserButton from "./Buttons/UserButton";

// JS
import { T } from "../../contants/i18n";

// CSS
import "./dashboard-header.css";
import Settings from "../Settings/Settings";

function Workmark() {
    const LANG = T.en;
    const titleGradient = ["to right", "#4c00ff, #9c31ff"];

    return (
        <div className="dashboard-header__wordmark">
            <div className="dashboard-header__logo">
                <LinearGradient gradient={titleGradient}>
                    <Layers size={32} />
                </LinearGradient>
            </div>

            <div className="dashboard-header__titles">
                <span className="dashboard-header__title">
                    <LinearGradient gradient={titleGradient}>
                        {LANG.dashboard.header.title.toUpperCase()}
                    </LinearGradient>
                </span>

                <span className="dashboard-header__subtitle">
                    <LinearGradient gradient={titleGradient}>
                        {LANG.dashboard.header.subTitle.toUpperCase()}
                    </LinearGradient>
                </span>
            </div>
        </div>
    );
}

export default function DashboardHeader({ setIsSettingsOpen }) {
    return (
        <header className="dashboard-header">
            <Workmark />

            <div className="dashboard-header__buttons">
                <SettingsButton setIsOpen={setIsSettingsOpen} />
                <UserButton />
            </div>
        </header>
    );
}
