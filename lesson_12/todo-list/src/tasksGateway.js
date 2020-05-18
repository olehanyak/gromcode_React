const baseUrl = "https://5e983e545eabe7001681bd52.mockapi.io/project/tasks/tasks";

export const createTask = taskData => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(taskData),
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Failed to create task");
        }
    });
};


export const fetchTaskList = () => {
    return fetch(baseUrl)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .then((tasksList) =>
            tasksList);
};

export const updateTask = (taskId, taskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(taskData),
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Failed to update task");
        }
    });
};

export const deleteTask = id => {
    return fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Failed to delete task");
        }
    });
};