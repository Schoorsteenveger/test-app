import React from "react";
import CountButton from "../Components/CountButton/CountButton";

export default function Counter() {
    return (
        <div>
            <h2>Counter met useEffect</h2>
            <CountButton incrementBy={1} />
            <CountButton incrementBy={5} />
        </div>
    )
}
