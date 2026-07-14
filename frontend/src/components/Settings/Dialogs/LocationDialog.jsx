import "./location-dialog.css";

import { useState } from "react";

import Settings from "../Components/SettingsComponents";

export default function LocationDialog({ initialLocation = null, onClose, onSave }) {
    const [name, setName] = useState(initialLocation?.name ?? "");

    const [latitude, setLatitude] = useState(initialLocation?.latitude ?? "");

    const [longitude, setLongitude] = useState(initialLocation?.longitude ?? "");

    function handleSave() {
        onSave({
            id: initialLocation?.id ?? crypto.randomUUID(),

            name,
            latitude: Number(latitude),
            longitude: Number(longitude),

            builtIn: initialLocation?.builtIn ?? false,
        });
    }

    return (
        <div className="location-dialog">
            <Settings.Title>{initialLocation ? "Edit Location" : "Add Location"}</Settings.Title>

            <Settings.Divider />

            <Settings.Section>
                <Settings.Row>
                    <Settings.RowContent>
                        <Settings.RowLabel>Name</Settings.RowLabel>

                        <Settings.RowDescription>
                            Friendly name shown throughout the application.
                        </Settings.RowDescription>
                    </Settings.RowContent>
                </Settings.Row>

                <Settings.TextInput value={name} onChange={(e) => setName(e.target.value)} />
            </Settings.Section>

            <Settings.Section>
                <Settings.Row>
                    <Settings.RowContent>
                        <Settings.RowLabel>Latitude</Settings.RowLabel>
                    </Settings.RowContent>
                </Settings.Row>

                <Settings.TextInput
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                />
            </Settings.Section>

            <Settings.Section>
                <Settings.Row>
                    <Settings.RowContent>
                        <Settings.RowLabel>Longitude</Settings.RowLabel>
                    </Settings.RowContent>
                </Settings.Row>

                <Settings.TextInput
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                />
            </Settings.Section>

            <Settings.Divider />

            <Settings.Row>
                <Settings.Button variant="secondary" onClick={onClose}>
                    Cancel
                </Settings.Button>

                <Settings.Button onClick={handleSave}>Save</Settings.Button>
            </Settings.Row>
        </div>
    );
}
