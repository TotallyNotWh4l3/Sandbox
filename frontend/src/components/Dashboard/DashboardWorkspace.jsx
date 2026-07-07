import React from "react";
import "./dashboard-workspace.css";
import { useSettings } from "../../hooks/useSettings";

export default function DashboardWorkspace() {
    const { settings } = useSettings();

    return (
        <main
            className="dashboard__workspace"
            style={{ "--workspace-columns": settings.gridColumns }}
        ></main>
    );
}
