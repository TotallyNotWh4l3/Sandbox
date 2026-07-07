import { useState, useEffect, useCallback } from "react";
import { useDashboardContext } from "../context/DashboardContext";
import { DEFAULT_DASHBOARD } from "../constants/dashboardOptions";

/**
 * useDashboard Hook
 * Manages the current dashboard with localStorage persistence.
 */
export function useDashboardState() {
    const [dashboard, setDashboard] = useState(() => {
        try {
            const stored = localStorage.getItem("co-efficient-dashboard");

            if (!stored) {
                return structuredClone(DEFAULT_DASHBOARD);
            }

            const parsed = JSON.parse(stored);

            return {
                ...structuredClone(DEFAULT_DASHBOARD),
                ...parsed,

                layout: {
                    ...DEFAULT_DASHBOARD.layout,
                    ...parsed.layout,
                },

                modules: parsed.modules ?? DEFAULT_DASHBOARD.modules,
            };
        } catch (e) {
            console.error("Failed to load dashboard:", e);
            return structuredClone(DEFAULT_DASHBOARD);
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem("co-efficient-dashboard", JSON.stringify(dashboard));
        } catch (e) {
            console.error("Failed to save dashboard:", e);
        }
    }, [dashboard]);

    // =====================================================
    // Layout
    // =====================================================

    const updateLayout = useCallback((key, value) => {
        setDashboard((prev) => ({
            ...prev,
            layout: {
                ...prev.layout,
                [key]: value,
            },
        }));
    }, []);

    // =====================================================
    // Dashboard
    // =====================================================

    const updateDashboard = useCallback((updater) => {
        setDashboard((prev) => (typeof updater === "function" ? updater(prev) : updater));
    }, []);

    return {
        dashboard,

        updateLayout,
        updateDashboard,

        setDashboard, // Temporary for development
    };
}

export function useDashboard() {
    return useDashboardContext();
}
