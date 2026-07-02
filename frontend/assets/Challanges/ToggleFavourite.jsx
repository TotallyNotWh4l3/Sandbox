import { Heart, HeartOff } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function ToggleFavourite() {
    const [isFavourited, setisFavourited] = useState(false);

    return (
        <button
            onClick={() => setisFavourited((prev) => !prev)}
            className={clsx("fav-btn", { "fav-btn-active": isFavourited })}
        >
            {isFavourited ? <Heart size={20} fill="currentColor" /> : <HeartOff size={20} />}
            {isFavourited ? "Favourited" : "Add to favourites"}
        </button>
    );
}
