import React from "react";
import { Settings, User, Layers } from "lucide-react"; // High-quality professional icons

// JS
import { T } from "../../contants/i18n";

// CSS
import "./dashboard-header.css";

export default function DashboardHeader() {
    const LANG = T.en
    return (
        <div className="dashboard__header">
            <div className="dashboard-header__wordmark">
                <div className="dashboard-header__logo">
                    <Layers size={32} />
                </div>
                <div className="dashboard-header__titles">
                    <span className="dashboard-header__title">
                        {LANG.dashboard.header.title.toUpperCase()}
                    </span>
                    <span className="dashboard-header__subtitle">
                        {LANG.dashboard.header.subTitle.toUpperCase()}
                    </span>
                </div>
            </div>

            <div className="dashboard-header__actions">
                <div className="dashboard-header__buttons">
                    <button className="dashboard-header__customize">
                        <Settings size={24}/>
                        {LANG.dashboard.header.buttonCustomize.toUpperCase()}
                    </button>
                </div>
                <div className="dashboard-header__user">
                    <div className="dashboard-header__usericon">
                        <span className="icon-wrapper">
                            <User />
                        </span>
                    </div>
                    <div className="dashboard-header__username">
                        {LANG.dashboard.header.usernamePlaceholder}
                    </div>
                </div>
            </div>
        </div>
    );
}
