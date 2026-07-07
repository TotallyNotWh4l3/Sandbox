// Dashboard.jsx

// JSX
import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardWorkspace from "./DashboardWorkspace";
import Settings from "../Settings/Settings";

// CSS
import "./dashboard.css";
import ModuleManager from "./ModuleManager";

export default function Dashboard() {
    // States
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    return (
        <div className="dashboard">
            <DashboardHeader setIsSettingsOpen={setIsSettingsOpen} />
            <DashboardWorkspace />
            <ModuleManager />

            {/* Modals */}
            {isSettingsOpen && <Settings onClose={() => setIsSettingsOpen(false)} />}
        </div>
    );
}
