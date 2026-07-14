// components/UI/Dialog/DialogManager.jsx

import Dialog from "./Dialog";

import { useDialog } from "../../../../../hooks/useDialog";
import { useSettings } from "../../../../../hooks/useSettings";

// Dialogs
import LocationDialog from "../../../Dialogs/LocationDialog";
import ConfirmDialog from "../../../Dialogs/ConfirmDialog";

export default function DialogManager() {
    const { dialogs, closeDialog } = useDialog();

    const { saveLocation, updateLocation, deleteLocation } = useSettings();

    return (
        <>
            {dialogs.map((dialog, index) => {
                const zIndex = 1100 + index * 10;

                let content = null;

                switch (dialog.type) {
                    // =====================================================
                    // LOCATION
                    // =====================================================

                    case "location":
                        content = (
                            <LocationDialog
                                initialLocation={dialog.props?.location}
                                onClose={() => closeDialog(dialog.id)}
                                onSave={(location) => {
                                    if (dialog.props?.location) {
                                        updateLocation(location.id, location);
                                    } else {
                                        saveLocation(location);
                                    }

                                    closeDialog(dialog.id);
                                }}
                            />
                        );
                        break;

                    // =====================================================
                    // CONFIRM
                    // =====================================================

                    case "confirm":
                        content = (
                            <ConfirmDialog
                                {...dialog.props}
                                onClose={() => closeDialog(dialog.id)}
                                onConfirm={() => {
                                    dialog.props?.onConfirm?.();
                                    closeDialog(dialog.id);
                                }}
                            />
                        );
                        break;

                    // =====================================================
                    // UNKNOWN
                    // =====================================================

                    default:
                        console.warn(`[DialogManager] Unknown dialog type: ${dialog.type}`);

                        return null;
                }

                return (
                    <Dialog key={dialog.id} zIndex={zIndex} onClose={() => closeDialog(dialog.id)}>
                        {content}
                    </Dialog>
                );
            })}
        </>
    );
}
