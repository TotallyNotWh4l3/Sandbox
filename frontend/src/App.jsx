// JSX
import Dashboard from "./components/Dashboard/Dashboard";

// Hooks
import { useSettingsState } from "./hooks/useSettings";
import { useDashboardState } from "./hooks/useDashboard";

// Context
import { SettingsProvider } from "./context/SettingsContext";
import { DashboardProvider } from "./context/DashboardContext";

// CSS
import "./styles/global.css";
import "./styles/variable.css";

export default function App() {
    const settingsState = useSettingsState();
    const dashboardState = useDashboardState();

    return (
        <SettingsProvider value={settingsState}>
            <DashboardProvider value={dashboardState}>
                <Dashboard />
            </DashboardProvider>
        </SettingsProvider>
    );
}
