// =====================================================
// Settings UI Options
// =====================================================

import { Palette, Globe, LayoutGrid, Blocks, Star } from "lucide-react";

export const LANGUAGE_OPTIONS = [
    { id: "en", label: "English" },
    { id: "ja", label: "日本語" },
];

export const SETTINGS_TABS = [
    {
        id: "theme",
        labelKey: "theme",
        icon: Palette,
    },
    {
        id: "location",
        labelKey: "location",
        icon: Globe,
    },
    {
        id: "grid",
        labelKey: "grid",
        icon: LayoutGrid,
    },
    {
        id: "modules",
        labelKey: "modules",
        icon: Blocks,
    },
    {
        id: "presets",
        labelKey: "presets",
        icon: Star,
    },
];