import "./dashboard-workspace.css";

import { useDashboard } from "../../hooks/useDashboard";
import Module from "../Modules/Module";

export default function DashboardWorkspace() {
    const { dashboard } = useDashboard();

    return (
        <main
            className="dashboard__workspace"
            style={{
                "--workspace-columns": dashboard.layout.columns,
                "--workspace-gap": `${dashboard.layout.gap}px`,
                "--workspace-padding": `${dashboard.layout.padding}px`,
            }}
        >
            {dashboard.modules.map((module) => (
                <Module key={module.id} module={module} />
            ))}
        </main>
    );
}
