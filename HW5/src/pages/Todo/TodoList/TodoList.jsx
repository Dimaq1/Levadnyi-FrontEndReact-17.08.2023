import React, { useEffect, useState } from 'react';
import TodoItem from '../../../components/TodoItem/TodoItem';
import { deleteTodoItem, getTodos, putTodoCompleted } from '../../../services/todoServices';
import './style.scss'
import { ITEM_COMPLETED, ITEM_PROGRESS } from '../../../constans/todoListConstans';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList({ newTodo }) {
  const [list, setList] = useState([])

  useEffect(() => {
    (async () => {
      try {
        setList(await getTodos())
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  useEffect(() => {
    Object.keys(newTodo).length && setList(prevList => [...prevList, newTodo])
  }, [newTodo])


  const updatedTodoCompleted = (item) => {
    (async () => {
      let updatedItem = await putTodoCompleted(item.id, { completed: !item.completed })
      setList(prevList => prevList.map(todo => {
        if (todo.id === item.id) todo = updatedItem
        return todo
      }))
    })()
  }

  const itemClass = (item) => {
    const classes = []
    classes.push(item.completed ? ITEM_COMPLETED : ITEM_PROGRESS)
    return classes.join(' ')
  }

  const handleDeleteFunc = (e, id) => {
    e.stopPropagation();
    (async () => {
      await deleteTodoItem(id)
      setList(prevState => prevState.filter(item => item.id !== id))
    })()
  }


  return (
    <List>
      {list.length ? (
        list
          .map((item) =>
            <TodoItem
              handleFuncComplited={() => updatedTodoCompleted(item)}
              className={itemClass(item)}
              key={item.id}
              icon={
                <IconButton onClick={(e) => handleDeleteFunc(e, item.id)} edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
              text={item.title}>
            </TodoItem>
          )
      ) : (
        <p>Loading...</p>
      )
      }
    </List >
  )


}

export default TodoList;