import React from "react";
import Profile from "./Profile";
import ProfileName from "./ProfileName";


const userData = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: new Date('1991-01-17T11:11:11.819Z'),
    birthPlace: 'London',
};


const App = () => {
    return (
        <div>
            <ProfileName user={userData} />
            <Profile user={userData} />
        </div>
    );
}

export default App;
