import GridLayoutDashboard from "./Challanges/GridLayoutDashboard";
import ToggleFavourite from "./Challanges/ToggleFavourite";
import ToggleMute from "./Challanges/ToggleMute";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { Flex, Text, Button } from "@radix-ui/themes";
import { collides } from "react-grid-layout";
import Taglist from "./Challanges/TagLists";

export default function App() {
    return (
        <div style={{ fontFamily: "sans-serif" }}>
            <h1> Hello, World! </h1>
            <Taglist />
        </div>
    );
}
