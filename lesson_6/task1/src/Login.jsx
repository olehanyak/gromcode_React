import React from "react";

const Login = ({ onLogin }) => {
    return (
        <button className="login btn" onClick={onLogin}>
            logout
        </button>
    );
};

export default Login;
