import React, { Component } from "react";
import Greeting from "./Greeting";
import Login from "./Login";
import Logout from "./Logout";
import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    hendleLogin = () => {
        this.setState({
            isLoggedIn: true,
        });
    };

    hendleLogout = () => {
        this.setState({
            isLoggedIn: false,
        });
    };

    render() {
        return (
            <div className="panel">
                <Greeting isLoggedIn={this.state.isLoggedIn} />

                {this.state.isLoggedIn ? <Login login={this.hendleLogin} /> : <Logout Logout={this.hendleLogout} />}
            </div>
        );
    }
}

export default Auth;
