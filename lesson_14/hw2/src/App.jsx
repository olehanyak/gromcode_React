import React from "react";
import Clock from "./Clock";

const App = () => {
    return (
        <>
            <Clock location={`New York`} offset={0} />
            <Clock location={`Kyiv`} offset={2} />
            <Clock location={`London`} offset={-5} />
        </>
    );
};

export default App;
