import React from "react";
import { Component } from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";
import { createTask, fetchTaskList, updateTask, deleteTask } from "./tasksGateway";

class TasksList extends Component {
    state = {
        tasks: [
            // { text: "Buy milk", done: false, id: 1 },
            // { text: "Pick up Tom from airport", done: false, id: 2 },
            // { text: "Visit party", done: false, id: 3 },
            // { text: "Visit doctor", done: true, id: 4 },
            // { text: "Buy meat", done: true, id: 5 },
        ],
    };

    componentDidMount() {
        this.fetchTasks();
    }

    fetchTasks = () => {
        fetchTaskList().then((taskList) => {
            this.setState({
                tasks: taskList,
            });
        });
    };

    onCreate = (text) => {
        const newTask = {
            text,
            done: false,
        };

        createTask(newTask).then(() => {
            this.fetchTasks();
        });
    };

    handleTaskStatusChange = (id) => {
        const { done, text } = this.state.tasks.find((task) => task.id === id);
        const updatedTask = {
            text,
            done: !done,
        };

        updateTask(id, updatedTask).then(() => {
            this.fetchTasks();
        });
    };

    handleTaskDelete = (id) => {
        deleteTask(id).then(() => {
            this.fetchTasks();
        });
    };

    render() {
        const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);

        return (
            <div className="todo-list">
                <CreateTaskInput onCreate={this.onCreate} />
                <ul className="list">
                    {sortedList.map((task) => (
                        <Task
                            key={task.id}
                            {...task}
                            onChange={this.handleTaskStatusChange}
                            onDelete={this.handleTaskDelete}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default TasksList;
