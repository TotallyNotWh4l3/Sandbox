import { useCallback } from "react";
import { useSettings } from "./useSettings";

export function useLocation() {
    const { settings } = useSettings();

    const locations = settings.locations;

    const currentLocation = locations.find(
        (location) => location.id === settings.preferences.locationId,
    );

    const locationOptions = locations.map((location) => ({
        id: location.id,
        label: location.name,
    }));

    const requestCurrentLocation = useCallback(() => {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error("Geolocation is not supported."));
                return;
            }

            navigator.geolocation.getCurrentPosition(
                ({ coords }) => {
                    resolve({
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                    });
                },
                reject,
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 60000,
                },
            );
        });
    }, []);

    return {
        locations,
        currentLocation,
        locationOptions,
        requestCurrentLocation,
    };
}
