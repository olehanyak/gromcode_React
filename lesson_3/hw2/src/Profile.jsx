import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import ProfileName from "./ProfileName";
// import moment from 'moment';

const birhDateUser = (date) => {
    return `${date.getDate()} ${date.getMonth()} ${date.getYear()}`;
};
// console.log(date)

const Profile = (props) => {
    console.log(props);
    return (
        <div>
            {/* <ProfileName /> */}
            {/* <div className="profile__name">
                {props.user.firstName} {props.user.lastName}
            </div> */}
            <div className="profile__birth">{`Was born ${birhDateUser(props.user.birthDate)} in ${
                props.user.birthPlace
            }`}</div>
        </div>
    );
};

export default Profile;
