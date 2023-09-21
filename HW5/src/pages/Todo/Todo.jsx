import React, { useState } from 'react';
import TodoList from './TodoList/TodoList';
import TodoForm from './TodoForm/TodoForm';
import Container from '@mui/material/Container';


function Todo() {
  const [newTodo, setNewTodo] = useState({})


  return (
    <Container maxWidth="lg" sx={{ minWidth: '400px', bgcolor: '#a9a9a9', boxShadow: 3, p: 2, borderRadius: '5px' }}>
      <TodoList newTodo={newTodo} />
      <TodoForm liftingNewTodo={setNewTodo} />
    </Container>
  )
}

export default Todo;