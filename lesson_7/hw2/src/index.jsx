import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';


const rootElement = document.querySelector('#root');

const users = [
    {
        name: "Bob",
        age: 23,
    },
    {
        name: "Tom",
        age: 24,
    },
    {
        name: "John",
        age: 25,
    },
    {
        name: "James",
        age: 21,
    },
    {
        name: "Nik",
        age: 27,
    },
    {
        name: "Jerry",
        age: 22,
    },
    {
        name: "Johan",
        age: 23,
    },
    {
        name: "Dan",
        age: 28,
    },
    {
        name: "Rob",
        age: 22,
    },
];

const newUsers = users.map((user, index) => ({ ...user, id: Math.random() }));
console.log(newUsers);

ReactDOM.render(<UsersList users={newUsers}/>, rootElement);