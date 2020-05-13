import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import UsersList from "./UsersList.jsx";

const rootElement = document.querySelector("#root");

const users = [
    {
        name: "Franky",
        age: 44,
        id: "id-1",
    },
    {
        name: "Leon",
        age: 30,
        id: "id-2",
    },
    {
        name: "Anna",
        age: 23,
        id: "id-3",
    },
    {
        name: "Robert",
        age: 12,
        id: "id-4",
    },
    {
        name: "Barbara",
        age: 22,
        id: "id-5",
    },
    {
        name: "Samuel",
        age: 50,
        id: "id-6",
    },
];

ReactDOM.render(<UsersList users={users} />, rootElement);
