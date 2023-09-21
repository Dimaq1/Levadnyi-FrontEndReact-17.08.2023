import axios from 'axios'
const API = 'https://650ae61adfd73d1fab092276.mockapi.io/todos/list/todos'

const getTodos = () => axios(API).then(({ data }) => data);

const putTodoCompleted = (id, item) => axios.put(`${API}/${id}`, item, {
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
})
  .then(({ data }) => data)

const addNewTodo = (item) => axios.post(API, item, {
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(({ data }) => data)

const deleteTodoItem = (id) => axios.delete(`${API}/${id}`).then(({ data }) => data)

export { getTodos, putTodoCompleted, deleteTodoItem, addNewTodo }





