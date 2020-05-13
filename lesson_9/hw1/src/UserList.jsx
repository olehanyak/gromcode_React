import React, { Component } from "react";
import User from "./User.jsx";
import Filter from "./Filter.jsx";

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };
    }

    onChange = (e) => {
        const { value } = e.target;
        this.setState({
            name: value,
        });
    };

    render() {
        const usersList = this.props.users
            .filter((user) => user.name.toLowerCase().includes(this.state.name.toLowerCase()))
            .map((user) => <User {...user} key={user.id} />);
            
        return (
            <div>
                <Filter onChange={this.onChange} filterText={this.state.name} count={usersList.length} />
                <ul className="users">{usersList}</ul>
            </div>
        );
    }
}

export default UsersList;
