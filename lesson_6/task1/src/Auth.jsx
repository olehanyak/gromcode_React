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
            isLoggedIn: false,
        });
    };

    hendleLogout = () => {
        this.setState({
            isLoggedIn: true,
        });
    };

    render() {
        return (
            <div className="panel">
                <Greeting isLoggedIn={this.state.isLoggedIn} />

                {this.state.isLoggedIn ? (
                    <button className="login btn" onClick={this.hendleLogin}>logout</button>
                ) : (
                    <button className="logout btn" onClick={this.hendleLogout}>login</button>
                )}
            </div>
        );
    }
}

export default Auth;
