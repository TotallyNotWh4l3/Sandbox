// JSX
import Dashboard from "./components/Dashboard/Dashboard";

// Hooks
import { useSettingsState } from "./hooks/useSettings";
import { SettingsProvider } from "./context/SettingsContext";

// CSS
import "./styles/global.css";
import "./styles/variable.css";

export default function App() {
    const settingsState = useSettingsState();

    return (
        <SettingsProvider value={settingsState}>
            <Dashboard />
        </SettingsProvider>
    );
}
