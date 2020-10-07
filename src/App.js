import React, { useEffect, useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import PostList from './components/PostList';
import TodoFrom from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'i love easy fronted' },
    { id: 2, title: 'we love easy fronted' },
    { id: 3, title: 'they love easy fronted' },
  ])

  const [postList, setPostList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const requestUrl = "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        const response = await fetch(requestUrl);
        const reponseJSON = await response.json();

        // console.log(reponseJSON);
        setPostList(reponseJSON.data);
      } catch (error) {
        console.log('failed to fetch post list: ', error.message);
      }
    })();
  }, []);

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
      {/* <ColorBox></ColorBox>
      <br></br>
      <TodoFrom onSubmit={handleSubmit}></TodoFrom>
      <TodoList todos={todoList}
        onTodoClick={handleTodoClick}></TodoList> */}
      <PostList posts={postList}></PostList>
    </div>
  );
}

export default App;
