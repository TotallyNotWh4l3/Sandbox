import clsx from "clsx";
import { useState } from "react";
import "./tag-lists.css";

// List of usable TAGS
const TAGS = ["React", "JavaScript", "CSS", "HTML","Node.js", "Express.js", "Python"];

export default function Taglist() {
    // useState for "currently selected tags (selected) and change/set selected tags (setSelected)"
    const [selected, setSelected] = useState([]);

    function toggleTag(tag) {
        setSelected(
            (prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]),
            // If the tag is inside the "selected list", it'll reverse the booleans
            // If not, it'll add the tag to the existing list of selected tags
        );
    }

    return (
        <div className="tag-list">
            {TAGS.map((tag) => (
                <button
                    key={tag}
                    onClick={() => toggleTag(tag)} // Calls the toggleTag Function and sending the clicked Tag
                    className={clsx("tag", { "tag--selected": selected.includes(tag) })}
                    // I'm not quite sure how this words
                >
                    {tag}
                </button>
            ))}
        </div>
    );
}
