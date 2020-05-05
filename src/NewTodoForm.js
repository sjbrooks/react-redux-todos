import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from "react-redux";


/** Form to add new todo. Rendered by App component
 *    - formData = state of form
 *    - formData is dispatched to store for adding a new todo
 */

function NewTodoForm() {
  const dispatch = useDispatch();
  const INITIAL_STATE = {
    task: ''
  }
  
  const [ formData, setFormData ] = useState({ ...INITIAL_STATE });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    const newFormData = {
      ...formData,
      key: uuid()
    }
    dispatch({
      type: "NEW_TODO",
      payload: newFormData
   })
    setFormData({ ...INITIAL_STATE });
  }

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="task" >Task
        <input
          type="text"
          name="task"
          value={formData.task}
          onChange={handleChange}
        />
      </label>
      <button>Add a task!</button>
    </form>
  )
}

export default NewTodoForm;