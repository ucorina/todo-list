import { ADD_TODO, DELETE_TODO, TOGGLE_TODO_STATUS } from "../constants/todos";

let nextId = 0;
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: ++nextId,
          text: action.text,
          priority: action.priority,
          completed: false
        }
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO_STATUS:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todos;
