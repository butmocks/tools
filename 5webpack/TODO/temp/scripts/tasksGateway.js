import "core-js/modules/es.promise.js";
const baseUrl = 'https://61da71d5ce86530017e3cd56.mockapi.io/api/v1/tasks';
export const createTask = taskData => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(taskData)
});
export const updateTask = (taskId, taskData) => fetch("".concat(baseUrl, "/").concat(taskId), {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(taskData)
});
export const deleteTask = taskId => fetch("".concat(baseUrl, "/").concat(taskId), {
  method: 'DELETE'
});
/* const mapTasks = tasks => tasks
  .map(({ _id, ...rest }) => ({ id: _id, ...rest })); */

export const getTasksList = () => fetch(baseUrl).then(response => response.json()); // .then(tasks => mapTasks(tasks));