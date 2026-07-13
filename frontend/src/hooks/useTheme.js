import { useEffect } from "react";
import { useSettings } from "./useSettings";

function toKebabCase(value) {
    return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

export function useTheme() {
    const { settings } = useSettings();

    useEffect(() => {
        const styleId = settings.preferences.appearance.currentStyle;

        const style = settings.styles.find((style) => style.id === styleId);

        if (!style) return;

        const root = document.documentElement;

        const applyGroup = (prefix, values) => {
            if (!values) return;

            Object.entries(values).forEach(([key, value]) => {
                root.style.setProperty(`--${prefix}-${toKebabCase(key)}`, value);
            });
        };

        applyGroup("color", style.appearance.colors);

        applyGroup("color", style.appearance.interactive);

        applyGroup("shadow", style.appearance.shadows);
    }, [settings]);
}
