import React, { useState, useEffect } from "react";

const Dimensions = ({ match }) => {
    const [dimensions, setDimensions] = useState({
        width: null,
        height: null,
    });

    useEffect(() => {
        const { innerHeight, innerWidth } = window;
        setDimensions({ width: innerWidth, height: innerHeight });
        const handleResize = (e) => {
            const { innerWidth, innerHeight } = e.target;
            setDimensions({ width: innerWidth, height: innerHeight });
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const { width, height } = dimensions;
    return <div class="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
