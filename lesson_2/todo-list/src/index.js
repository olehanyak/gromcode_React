import React from 'react';
import ReactDOM from 'react-dom';
import './list.css';

const rootElem = document.querySelector('#root');

const element = (
  <>
    <h1 clssName="title">Todo List</h1>
    <main className="todo-list">
      <div className="actions">
        <input className="task-input" type="text" />
        <button className="btn create-task-btn">Create</button>
      </div>
    </main>
  </>
);


ReactDOM.render(
  element,
  rootElem
);

