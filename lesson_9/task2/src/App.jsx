import React, { Component } from "react";
import UserForm from "./UserForm.jsx";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props,
        };
    }

    createUser = (props) => {
        console.log(props);
    };

    render() {
        return <UserForm />;
    }
}

export default App;
