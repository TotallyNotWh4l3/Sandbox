// Dashboard.jsx

// JSX
import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardWorkspace from "./DashboardWorkspace";

// CSS
import "./dashboard.css";


export default function Dashboard() {
    // States
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    return (
        <div className="dashboard">
            <DashboardHeader setIsSettingsOpen={setIsSettingsOpen} />
            <DashboardWorkspace />

        </div>
    );
}
