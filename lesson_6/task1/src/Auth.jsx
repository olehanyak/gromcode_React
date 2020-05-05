import React, { Component } from "react";
import Greeting from "./Greeting";

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

                {this.state.isLoggedIn ? (
                    <button onClick={this.hendleLogout}>Login</button>
                ) : (
                    <button onClick={this.hendleLogin}>Logout</button>
                )}
            </div>
        );
    }
}

export default Auth;
