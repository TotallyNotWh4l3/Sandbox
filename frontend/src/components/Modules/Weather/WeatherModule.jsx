import ModuleFrame from "../core/ModuleFrame";
import ModuleEditor from "../core/ModuleEditor";

export default function WeatherModule({ module }) {
    return (
        <ModuleFrame title={module.settings.title}>
            <p>Weather module placeholder</p>
            <p>Location: {module.settings.city}</p>

            <ModuleEditor module={module} />
        </ModuleFrame>
    );
}
