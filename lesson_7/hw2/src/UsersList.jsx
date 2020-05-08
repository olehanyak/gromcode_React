import React, { Component } from "react";
import User from "./User";
import Pagination from "./Pagination";

class UsersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0,
            itemsPerPage: 3,
        };
    }

    goPrev = () => {
        this.setState({
            currentPage: this.state.currentPage - 1,
        });
    };

    goNext = () => {
        this.setState({
            currentPage: this.state.currentPage + 1,
        });
    };

    render() {
        const firstIndex = this.state.currentPage * this.state.itemsPerPage;
        const lastIndex = firstIndex + this.state.itemsPerPage;
        const usersList = this.props.users.slice(firstIndex, lastIndex);

        return (
            <div>
                <Pagination
                    goPrev={this.goPrev}
                    goNext={this.goNext}
                    currentPage={this.state.currentPage}
                    itemsPerPage={this.state.itemsPerPage}
                    totalItems={this.props.users.length}
                />
                <ul className="users">
                    {usersList.map((user) => (
                        <User key={user.id} {...user} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default UsersList;
