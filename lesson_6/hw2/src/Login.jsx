import React from "react";

const Login = ({ login }) => {
    console.log(login);
    return (
        <button className="login btn" onClick={login}>
            login
        </button>
    );
};

export default Login;
