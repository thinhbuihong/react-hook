import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import './App.scss';
import ColorBox from './components/ColorBox';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoFrom from './components/TodoForm';
import TodoList from './components/TodoList';
import PostFilterForm from './components/PostFiltersForm/PostFilterForm';
import Clock from './components/Clock';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'i love easy fronted' },
    { id: 2, title: 'we love easy fronted' },
    { id: 3, title: 'they love easy fronted' },
  ])

  const [pagination, setPagination] = useState({
    _page: 1, _limit: 10, totalRows: 1,
  })
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: '',
  })

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const reponseJSON = await response.json();

        // console.log(reponseJSON);
        setPostList(reponseJSON.data);
        setPagination(reponseJSON.pagination);
      } catch (error) {
        console.log('failed to fetch post list: ', error.message);
      }
    })();
  }, [filters]);
  //end state
  const handlePageChange = (newPage) => {
    console.log('new page', newPage)
    setFilters({
      ...filters,
      _page: newPage,
    })
  }

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
  const handleFiltersChange = (newFilters) => {
    console.log("debounce")
    setFilters({
      ...filters, _page: 1,
      title_like: newFilters.searchTerm,
    })
  }

  return (
    <div className="app">
      app
      {/* <ColorBox></ColorBox>
      <br></br>
      <TodoFrom onSubmit={handleSubmit}></TodoFrom>
      <TodoList todos={todoList}
        onTodoClick={handleTodoClick}></TodoList> */}
      {/* <PostFilterForm onSubmit={handleFiltersChange}></PostFilterForm>
      <PostList posts={postList}></PostList>
      <Pagination pagination={pagination}
        onPageChange={handlePageChange}></Pagination> */}
      <Clock></Clock>
    </div>
  );
}

export default App;
