import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElem = document.querySelector('#root');

const element = (
  <h1 clssName="title">Todo List</h1>
);


ReactDOM.render(
  element,
  rootElem
);

