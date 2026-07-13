import "./interface-settings.css";

import { useSettings } from "../../../hooks/useSettings";
import { useLanguage } from "../../../hooks/useLanguage";

import Settings from "../Components/SettingsComponents";

import { LANGUAGE_OPTIONS } from "../../../constants/interface";
import { Computer } from "lucide-react";

export default function InterfaceSettings() {
    const { settings, updatePreference, applyStyle } = useSettings();
    const T = useLanguage();

    const styleOptions = settings.styles.map((style) => ({
        id: style.id,
        label: style.name,
    }));

    return (
        <div className="interface-settings">
            <Settings.Title Icon={Computer}>{T.settings.interface.title}</Settings.Title>

            <Settings.Description>{T.settings.interface.description}</Settings.Description>

            <Settings.Divider mod="thick" />

            {/* LANGUAGE */}
            <Settings.Section>
                <Settings.SectionTitle>{T.settings.interface.language.title}</Settings.SectionTitle>

                <Settings.Description>
                    {T.settings.interface.language.description}
                </Settings.Description>

                <Settings.Select
                    value={settings.preferences.language}
                    options={LANGUAGE_OPTIONS}
                    onChange={(event) => updatePreference("language", event.target.value)}
                />
            </Settings.Section>

            <Settings.Divider />

            {/* APPEARANCE */}
            <Settings.Section>
                <Settings.SectionTitle>
                    {T.settings.interface.appearance.title}
                </Settings.SectionTitle>

                <Settings.Description>
                    {T.settings.interface.appearance.description}
                </Settings.Description>

                <Settings.Select
                    value={settings.preferences.appearance.currentStyle}
                    options={styleOptions}
                    onChange={(event) => applyStyle(event.target.value)}
                />
            </Settings.Section>
        </div>
    );
}
