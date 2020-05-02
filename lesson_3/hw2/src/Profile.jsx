import React from "react";
import "./index.scss";
import moment from 'moment';

// const birhDateUser = (date) => {
//     return `${date.getDate()} ${date.getMonth()} ${date.getYear()}`;
// };

const birhDateUser = (date) => moment(date).format("DD MMM YY");

const Profile = (props) => {
    console.log(props);
    return (
        <div>
            <div className="profile__name">
                {props.user.firstName} {props.user.lastName}
            </div>
            <div className="profile__birth">{`Was born ${birhDateUser(props.user.birthDate)} in ${
                props.user.birthPlace
            }`}</div>
        </div>
    );
};

export default Profile;
