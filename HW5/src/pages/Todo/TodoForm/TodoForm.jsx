import React, { useState, memo } from 'react';
import { addNewTodo } from '../../../services/todoServices';
import Checkbox from '@mui/material/Checkbox';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './style.scss'

function TodoForm({ liftingNewTodo }) {

  const [newTodo, setNewTodo] = useState({
    title: '',
    completed: false,
  })

  function handleTitle(e) {
    setNewTodo(prevState => ({
      ...prevState,
      title: e.target.value
    }))
  }

  function handleCompleted(e) {
    setNewTodo(prevState => ({
      ...prevState,
      completed: e.target.checked
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    (async () => {
      let addedTodo = await addNewTodo(newTodo)
      liftingNewTodo(addedTodo);
    })()
  }


  return (
    <form className='form' onSubmit={handleSubmit}>
      <label className='form__label-title' htmlFor="todoTitle">
        Title todo:
        <input
          id='todoTitle'
          type="text"
          defaultValue={newTodo.title}
          onChange={handleTitle} />
      </label>
      <label className='form__label-checkbox' htmlFor="todoCompleted">
        Completed:
        <Checkbox
          sx={{ p: 0 }}
          color="secondary"
          id='todoCompleted'
          type="checkbox"
          onChange={handleCompleted}
        />
      </label>
      <Fab sx={{ position: 'absolute', left: '82%', top: '50%', transform: 'translateY(-50%)' }} color="secondary" aria-label="add" onClick={handleSubmit}>
        <AddIcon />
      </Fab>
    </form>
  );
}

export default TodoForm;