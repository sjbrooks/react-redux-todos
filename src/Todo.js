import React from 'react';

/** Todo: presentational component that renders a single list item task
 *      - Takes props of task, removeTodo, and id
 *      - Used in TodoList component
 */ 
function Todo({ task, removeTodo, id }) {

  return (
    <div className="Todo">
      <li>{task}</li>
      <button className="btn btn-danger Todo-remove" id={id} onClick={() => removeTodo(id)}> X </button>
    </div>
  )
}

export default Todo;