// JSX
import Dashboard from "./components/Dashboard/Dashboard";
import DialogManager from "./components/Settings/Components/UI/Dialog/DialogManager";

// Hooks
import { useSettingsState } from "./hooks/useSettings";
import { useDashboardState } from "./hooks/useDashboard";
import { useDialogState } from "./hooks/useDialog";
import { useTheme } from "./hooks/useTheme";
import { useAuthState } from "./hooks/useAuth";

// Context
import { SettingsProvider } from "./context/SettingsContext";
import { DashboardProvider } from "./context/DashboardContext";
import { DialogProvider } from "./context/DialogContext";
import { AuthProvider } from "./context/AuthContext";

// CSS
import "./styles/global.css";
import "./styles/variable.css";

function ThemeApplier() {
    useTheme();
    return null;
}

export default function App() {
    const settingsState = useSettingsState();
    const dashboardState = useDashboardState();
    const dialogState = useDialogState();
    const authState = useAuthState();

    return (
        <AuthProvider value={authState}>
            <SettingsProvider value={settingsState}>
                <DashboardProvider value={dashboardState}>
                    <DialogProvider value={dialogState}>
                        <ThemeApplier />

                        <Dashboard />

                        <DialogManager />
                    </DialogProvider>
                </DashboardProvider>
            </SettingsProvider>
        </AuthProvider>
    );
}
