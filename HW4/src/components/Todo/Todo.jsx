import { useEffect, useState } from "react"
import TodoList from "./TodoList/TodoList"
import Statistics from "./Statistics/Statistics";
import ThemeMode from "./ThemeMode/ThemeMode";

const Todo = () => {
  const [list, setList] = useState([])
  const [themeMode, setThemeMode] = useState('light')

  useEffect(() => {
    async function fetchData() {
      try {
        let request = await fetch('https://61498bf2035b3600175ba32f.mockapi.io/todo');
        let response = await request.json();
        setList(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  function handleClick(index) {
    const updatedList = [...list];
    if (updatedList[index].completed === true) {
      updatedList.splice(index, 1);
    } else {
      updatedList[index] = { ...updatedList[index], completed: true };
    }
    setList(updatedList);
  }

  function toggleTheme() {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <TodoList themeMode={themeMode} array={list} handleFunc={handleClick} />
      <Statistics arr={list} completed={list.map((item) => item.completed)} />
      <ThemeMode themeMode={themeMode} toggleTheme={toggleTheme} />
    </>
  )
}

export default Todo