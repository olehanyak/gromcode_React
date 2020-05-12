import React, { Component } from "react";
import UserForm from "./UserForm.jsx";

class App extends Component {

    createUser = (obj) => {
        console.log(obj);
    };

    render() {
        return <UserForm user={this.createUser} />;
    }
}
export default App;
