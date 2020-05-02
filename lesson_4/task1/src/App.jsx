import React from "react";
import Counter from "./Counter";

const App = () => {
    return (
        <>
            <Counter start={1} interval={1000} />
            <Counter start={15} interval={1000} />
            <Counter start={-50} interval={100} />
        </>
    );
};

export default App;
