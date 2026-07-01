// JSX
import DashboardHeader from "./DashboardHeader";
import DashboardWorkspace from "./DashboardWorkspace";

// CSS
import "./dashboard.css"


export default function Dashboard() {
    return (
        <div className="dashboard">
            <DashboardHeader />
            <DashboardWorkspace />
        </div>
    )
}