import WeatherModule from "../Modules/WeatherModule";

const MODULE_COMPONENTS = {
    weather: WeatherModule,
    // schedule: ScheduleModule,
    // announcement: AnnouncementModule,
};

export default function ModuleRenderer({ module }) {
    const Component = MODULE_COMPONENTS[module.type];

    if (!Component) {
        return <div>{module.type} module</div>;
    }

    return <Component module={module} />;
}
