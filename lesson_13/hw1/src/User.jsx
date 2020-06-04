import React, { Component } from "react";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar_url: "https://avatars1.githubusercontent.com/u/9919?v=4",
            name: "Github",
            location: "San Francisco,CA",
        };
        console.log("==> constructor");
    }

    componentDidMount() {
        this.fetchUser();
    }

    fetchUser() {
        console.log(this.props);
        const { match } = this.props;
        fetch(`https://api.github.com/users/${match.params.userId}`)
            .then((response) => response.json())
            .then((data) => {
                const { avatar_url, name, location } = data;
                this.setState({
                    avatar_url,
                    name,
                    location,
                });
            });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.fetchUser(this.props.match.params.userId);
        }
    }

    render() {
        const { avatar_url, name, location } = this.state;

        return (
            <div className="user">
                <img alt="User Avatar" src={avatar_url} className="user__avatar" />
                <div className="user__info">
                    <span className="user__name">{name}</span>
                    <span className="user__location">{location}</span>
                </div>
            </div>
        );
    }
}

export default User;
