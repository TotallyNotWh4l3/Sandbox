import { useState } from "react";

import DashboardHeader from "./DashboardHeader";
import DashboardWorkspace from "./DashboardWorkspace";

import Settings from "../Settings/Settings";

import "./dashboard.css";

export default function Dashboard() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isSettingsClosing, setIsSettingsClosing] = useState(false);

    const closeSettings = () => {
        setIsSettingsClosing(true);

        setTimeout(() => {
            setIsSettingsOpen(false);
            setIsSettingsClosing(false);
        }, 180);
    };

    return (
        <div className="dashboard">
            <DashboardHeader setIsSettingsOpen={setIsSettingsOpen} />

            <DashboardWorkspace />

            {isSettingsOpen && (
                <>
                    <div
                        className={`dashboard__overlay ${
                            isSettingsClosing ? "dashboard__overlay--closing" : ""
                        }`}
                        onClick={closeSettings}
                    />

                    <Settings onClose={closeSettings} closing={isSettingsClosing} />
                </>
            )}
        </div>
    );
}
