import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NumberList from './NumbersList';

const rootElement = document.querySelector('#root');

const numbers = [1, 2, 3, 4, 5, 6];

ReactDOM.render(<NumberList numbers={numbers} />, rootElement);