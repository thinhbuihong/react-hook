import React, { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoFrom from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'i love easy fronted' },
    { id: 2, title: 'we love easy fronted' },
    { id: 3, title: 'they love easy fronted' },
  ])
  const handleTodoClick = (todo) => {
    setTodoList([...todoList].filter(td => td.id !== todo.id));

  }

  const handleSubmit = (formValue) => {
    const todo = {
      id: todoList.length + 1,
      ...formValue
    }
    setTodoList([...todoList, todo]);
    // console.log([...todoList, todo])
  }

  return (
    <div className="app">
      app
      <ColorBox></ColorBox>
      <br></br>
      <TodoFrom onSubmit={handleSubmit}></TodoFrom>
      <TodoList todos={todoList}
        onTodoClick={handleTodoClick}></TodoList>
    </div>
  );
}

export default App;
