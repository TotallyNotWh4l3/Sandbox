import { useDashboard } from "../../hooks/useDashboard";

export default function ModuleEditor({ module }) {
    const { updateModuleSettings } = useDashboard();

    return (
        <div>
            <label>Title</label>

            <input
                value={module.settings.title ?? ""}
                onChange={(e) => updateModuleSettings(module.id, "title", e.target.value)}
            />

            {module.type === "weather" && (
                <>
                    <label>City</label>

                    <input
                        value={module.settings.city ?? ""}
                        onChange={(e) => updateModuleSettings(module.id, "city", e.target.value)}
                    />
                </>
            )}
        </div>
    );
}
