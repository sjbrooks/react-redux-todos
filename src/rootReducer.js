const INITIAL_STATE = { todos: []};

/** rootReducer handles our redux changes
 *  NEW_TODO = adding a new task to store.todos
 *  DELETE_TODO = removing a specific todo from store.todos
 */

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "NEW_TODO":
      return { ...state, todos: [ ...state.todos, action.payload]};

    case "DELETE_TODO":
      const filteredTodos = state.todos.filter(todo => todo.key !== action.payload.id)
      return { ...state, todos: [...filteredTodos]}
    
    default:
      return state;
  }
}

export default rootReducer;