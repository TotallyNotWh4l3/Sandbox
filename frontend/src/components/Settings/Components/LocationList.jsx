import { Pencil, Trash2, MapPin, Lock } from "lucide-react";

import Settings from "./SettingsComponents";

export default function LocationList({
    locations,
    defaultLocationId,

    onEdit,
    onDelete,
}) {
    return (
        <div className="location-list">
            {locations.map((location) => (
                <Settings.Row key={location.id}>
                    <Settings.RowContent>
                        <Settings.RowLabel>
                            <MapPin size={16} />

                            {location.name}
                        </Settings.RowLabel>

                        <Settings.RowDescription>
                            {location.city}, {location.country}
                        </Settings.RowDescription>
                    </Settings.RowContent>

                    {location.builtIn ? (
                        <Lock size={18} />
                    ) : (
                        <div className="location-list__actions">
                            <button onClick={() => onEdit(location)}>
                                <Pencil size={16} />
                            </button>

                            <button
                                onClick={() => onDelete(location)}
                                disabled={location.id === defaultLocationId}
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    )}
                </Settings.Row>
            ))}
        </div>
    );
}
