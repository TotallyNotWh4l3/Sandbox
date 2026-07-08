import { useDashboard } from "../../hooks/useDashboard";
import ModuleRenderer from "../Modules/core/ModuleRenderer";
import "./dashboard-workspace.css"

export default function DashboardWorkspace() {
    const { dashboard, selectModule } = useDashboard();

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
                <ModuleRenderer key={module.id} module={module} onSelect={selectModule} />
            ))}
        </main>
    );
}
