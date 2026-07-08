import { useDashboard } from "../../../hooks/useDashboard";

const AVAILABLE_MODULES = [
    {
        type: "weather",
        name: "Weather",
    },
    {
        type: "schedule",
        name: "Schedule",
    },
    {
        type: "announcement",
        name: "Announcements",
    },
];

export default function ModuleManager() {
    const { dashboard, addModule, removeModule } = useDashboard();

    return (
        <div>
            <h3>Add Module</h3>

            {AVAILABLE_MODULES.map((module) => (
                <button key={module.type} onClick={() => addModule(module.type)}>
                    Add {module.name}
                </button>
            ))}

            <h3>Current Modules</h3>

            {dashboard.modules.map((module) => (
                <div key={module.id}>
                    {module.type}

                    <button onClick={() => removeModule(module.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}
