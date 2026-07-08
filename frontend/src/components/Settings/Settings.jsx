import { useMemo, useState } from "react";

import "./settings.css";

import { SETTINGS_PAGES } from "../../constants/interface";

import SettingsSidebar from "./Sidebar/SettingsSidebar";

import InterfaceSettings from "./Pages/InterfaceSettings";
import ModuleSettings from "./Pages/ModuleSettings";
import DashboardSettings from "./Pages/DashboardSettings";
import AboutSettings from "./Pages/AboutSettings";

const PAGE_COMPONENTS = {
    interface: InterfaceSettings,
    // modules: ModuleSettings,
    // dashboard: DashboardSettings,
    // about: AboutSettings,
};

export default function Settings() {
    const [currentPage, setCurrentPage] = useState(SETTINGS_PAGES[0].id);

    const CurrentPage = useMemo(() => PAGE_COMPONENTS[currentPage], [currentPage]);

    return (
        <div className="settings">
            <SettingsSidebar currentPage={currentPage} onPageChange={setCurrentPage} />

            <main className="settings__content">
                <CurrentPage />
            </main>
        </div>
    );
}
