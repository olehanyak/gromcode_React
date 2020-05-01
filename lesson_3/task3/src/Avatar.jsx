import React from "react";

function Avatar(props) {
    return <img className="avatar" src={props.avatarUrl} alt={props.name} />;
};

export default Avatar;
