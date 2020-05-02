import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
// import moment from 'moment';

// const userData = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthDate: new Date('2003-01-01T11:11:11.819Z'),
// };

const age = (date) => parseInt((new Date().getTime() - new Date(date)) / (24 * 3600 * 365 * 1000));
// console.log(date)

const Greeting = (props) => {
    console.log(props);
    return <div className="greeting">{`My name is ${props.firstName}. I'm ${age(props.birthDate)} years old`}</div>;
};

export default Greeting;
