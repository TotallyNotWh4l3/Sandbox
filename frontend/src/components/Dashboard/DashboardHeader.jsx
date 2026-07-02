import React from "react";
import { Layers } from "lucide-react";
import { LinearGradient } from "react-text-gradients";

// Components

// JS
import { T } from "../../contants/i18n";

// CSS
import "./dashboard-header.css";
import SettingsButton from "./Buttons/SettingsButton";
import UserButton from "./Buttons/UserButton";

export default function DashboardHeader() {
    const LANG = T.en;

    const titleGradient = ["to right", "#4c00ff, #9c31ff"];

    return (
        <header className="dashboard-header">
            <div className="dashboard-header__wordmark">
                <div className="dashboard-header__logo">
                    <Layers size={32} />
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

            <div className="dashboard-header__buttons">
                <SettingsButton />
                <UserButton />
            </div>
        </header>
    );
}
