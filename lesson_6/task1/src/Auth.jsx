import React, { Component } from "react";
import Greeting from "./Greeting";
import Logout from "./Logout";
import Login from "./Login";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    handleLogin = () => {
        this.setState({
            isLoggedIn: false,
        });
    };

    handleLogout = () => {
        this.setState({
            isLoggedIn: true,
        });
    };

    render() {
        // let button;

        // if (this.state.isLoggedIn) {
        //     button = <Logout Logout={this.handleLogout} />;
        // } else {
        //     button = <Login Login={this.handleLogin} />;
        // }
        return (
            <div className="panel">
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                <div>
                    {/* {button} */}
                    {/* {this.state.isLoggedIn ? <Logout Logout={this.handleLogout} /> : <Login Login={this.handleLogin} />} */}
                      {this.state.isLoggedIn ? (
                    <button className="login btn" onClick={this.handleLogin}>
                        logout
                    </button>
                ) : (
                    <button className="logout btn" onClick={this.handleLogout}>
                        login
                    </button> 
                )} 
                </div>
            </div>
        );
    }
}

export default Auth;
