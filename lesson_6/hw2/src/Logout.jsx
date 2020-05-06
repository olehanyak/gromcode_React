import React from "react";

const Logout = ({ logout }) => {
    console.log(logout);
    return (
        <button className="logout btn" onClick={logout}>
            logout
        </button>
    );
};

export default Logout;
