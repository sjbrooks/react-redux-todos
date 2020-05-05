import React from 'react';
import './App.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';


/** App: Component that renders NewTodoForm and TodoList components */

function App() {
  return (
    <div className="App">
      <NewTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
