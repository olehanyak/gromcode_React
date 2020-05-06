import React, { Component } from "react";
import Spinner from "./Spinner";
import Logout from "./Logout";
import Login from "./Login";

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            isLoading: false,
        };
    }

    onLogin = () => {
        this.setState({
            isLoading: true,
        });
        setTimeout(() => {
            this.setState({
                isLoggedIn: true,
                isLoading: false,
            });
        }, 2000);
    };

    onLogout = () => {
        this.setState({
            isLoggedIn: false,
        });
    };

    render() {
        const { isLoggedIn, isLoading } = this.state;
        if (isLoading) {
            return <Spinner size={20} />;
        }
        if (isLoggedIn) {
            return <Logout logout={this.onLogout} />;
        }
        return <Login login={this.onLogin} />;
    }
}

export default Auth;
