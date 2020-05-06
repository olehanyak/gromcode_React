import React from "react";

const Logout = (props) => {
    console.log(props);
    return (
        <button className="logout btn" onClick={props.onLogout}>
            logout
        </button>
    );
};

export default Logout;
