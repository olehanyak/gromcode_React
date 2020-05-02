import React from "react";

const ProfileName = (props) => {
    console.log(props);
    return (
        <div className="profile__name">
            {props.user.firstName}, {props.user.lastName}
        </div>
    );
}

export default ProfileName;
