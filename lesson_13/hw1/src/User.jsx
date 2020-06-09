import React, { useState, useEffect } from "react";

function User(props) {
    const [userData, setUserData] = useState({
        avatar_url: "https://avatars1.githubusercontent.com/u/9919?v=4",
        name: "Github",
        location: "San Francisco,CA",
    });

    useEffect(() => {
        const { match } = props;
        console.log("useEffect");
        fetch(`https://api.github.com/users/${match.params.userId}`)
            .then((response) => response.json())
            .then((data) => {
                const { avatar_url, name, location } = data;
                setUserData({
                    avatar_url,
                    name,
                    location,
                });
            });
    }, [props.match.params.userId]);

    useEffect(() => {
        const onResize = () => {
            console.log("resize");
        };

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        }

    }, []);

    const { avatar_url, name, location } = userData;

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

export default User;

