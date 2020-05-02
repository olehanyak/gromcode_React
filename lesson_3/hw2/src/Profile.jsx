import React from "react";
import "./index.scss";
import moment from 'moment';

// const birhDateUser = (date) => {
//     return `${date.getDate()} ${date.getMonth()} ${date.getYear()}`;
// };

const birhDateUser = (date) => moment(date).format('DD MMM YY');

const Profile = (props) => {
    // console.log(props);
    return (
        <div>
            <div className="profile__name">
                {`${props.userData.firstName} ${props.userData.lastName}`}
            </div>
            <div className="profile__birth">
                {`Was born ${birhDateUser(props.userData.birthDate)} in ${props.userData.birthPlace}`}
            </div>
        </div>
    );
};

export default Profile;
