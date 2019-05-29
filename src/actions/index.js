import { ADD_TODO, DELETE_TODO, TOGGLE_TODO_STATUS } from "../constants/todos";

export const addTodo = text => ({ type: ADD_TODO, text });
export const deleteTodo = id => ({ type: DELETE_TODO, id });
export const toggleTodoStatus = id => ({ type: TOGGLE_TODO_STATUS, id });
