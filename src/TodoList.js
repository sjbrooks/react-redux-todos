import React from 'react';
import Todo from './Todo';
import { useSelector, useDispatch } from "react-redux";


/** TodoList - renders the list of todos in store.todos.
 *  TodoList is rendered by App componenet.
 *     - store.todos = array of todo objects
 *     - removeTodo will invoke a dispatch to remove a specific todo
 * 
 */

function TodoList() {
  const todos = useSelector(st => st.todos);
  const dispatch = useDispatch();

  const removeTodo = id => {
    dispatch({
      type: "DELETE_TODO",
      payload: {
        id
      }
    });
  }
  
  const allTodos = todos.map(({ task, key }) => (
    <Todo
      task={task}
      key={key}
      id={key}
      removeTodo={removeTodo}
    />
  ));


  return (
    <div>
      {allTodos}
    </div>
  )
}

export default TodoList;