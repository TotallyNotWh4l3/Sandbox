import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function ToggleMute() {
    const [isMuted, setIsMuted] = useState(false)

    return (
        <button
            onClick={() => setIsMuted((prev) => !prev)}
            className={clsx("mute-btn", {"mute-btn--active" : isMuted})}
        >
            {isMuted
                ? <VolumeX size={20} style={{color: "red"}} />
                : <Volume2 size={20} />}
            {isMuted ? "Muted" : "Unmuted"}
        </button>
    )
}
