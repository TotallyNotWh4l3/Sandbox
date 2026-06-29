import { WheatIcon } from "lucide-react";
import GridLayout from "react-grid-layout";

const LAYOUT = [
    { i: "weather", x: 0, y: 0, w: 2, h: 2 },
    { i: "clock", x: 2, y: 0, w: 2, h: 2 },
    { i: "news", x: 0, y: 2, w: 4, h: 2 },
];

export default function GridLayoutDashboard() {
    return (
        <GridLayout layout={LAYOUT} cols={12} rowHeight={80} width={1200} compactType="vertical" style={{color: "white"}}>
            <div key="weather" style={{ background: "#1a1a2e", borderRadius: 8, padding: 16 }}>
                <h3>Weather</h3>
                <p>Tokyo, 24°C</p>
            </div>

            <div key="clock" style={{ background: "#1a1a2e", borderRadius: 8, padding: 16 }}>
                <h3>Clock</h3>
                <p>14:32</p>
            </div>

            <div key="news" style={{ background: "#1a1a2e", borderRadius: 8, padding: 16 }}>
                <h3>News</h3>
                <p>Latest headlines...</p>
            </div>
        </GridLayout>
    );
}
