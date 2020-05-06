import React from "react";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

const Greeting = (props) => {
    console.log(props)
    if (props.isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
};

export default Greeting;
 