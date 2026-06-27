import ToggleFavourite from "./Challanges/ToggleFavourite";
import ToggleMute from "./Challanges/ToggleMute";

export default function App() {
    return (
        <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
            <h1>Hello Sandbox!</h1>
            <p>Your workspace is completely clean and ready.</p>

            <ToggleFavourite />
            <ToggleMute />
        </div>
    );
}
