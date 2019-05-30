import {
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  DELETE_TODO_LOADING,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
  TOGGLE_TODO_STATUS_LOADING,
  TOGGLE_TODO_STATUS_SUCCESS,
  TOGGLE_TODO_STATUS_ERROR,
  TODOS_UPDATED
} from "../constants/todos";

const initialState = {
  isLoadingTodoList: true,
  list: [],
  errorMessage: null
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_UPDATED:
      return {
        ...state,
        isLoadingTodoList: false,
        list: action.todos
      };
    case ADD_TODO_LOADING:
    case DELETE_TODO_LOADING:
    case TOGGLE_TODO_STATUS_LOADING:
    case ADD_TODO_SUCCESS:
    case DELETE_TODO_SUCCESS:
    case TOGGLE_TODO_STATUS_SUCCESS:
      return {
        ...state,
        errorMessage: null
      };

    case ADD_TODO_ERROR:
    case DELETE_TODO_ERROR:
    case TOGGLE_TODO_STATUS_ERROR:
      return {
        ...state,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

export default todos;
