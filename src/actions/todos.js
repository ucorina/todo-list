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
import * as todosApi from "../api/todosApi";

const getUserId = state => {
  return state.user.details.uid;
};

export function addTodo(item) {
  return function(dispatch, getState) {
    const userId = getUserId(getState());

    dispatch({ type: ADD_TODO_LOADING });
    todosApi.addTodo(userId, item).then(
      result => {
        dispatch({ type: ADD_TODO_SUCCESS, item });
      },
      error => dispatch({ type: ADD_TODO_ERROR, error: error.message })
    );
  };
}

export function deleteTodo(todoId) {
  return function(dispatch, getState) {
    const userId = getUserId(getState());

    dispatch({ type: DELETE_TODO_LOADING });
    todosApi
      .deleteTodo(userId, todoId)
      .then(
        () => dispatch({ type: DELETE_TODO_SUCCESS }),
        error => dispatch({ type: DELETE_TODO_ERROR, error })
      );
  };
}

export function toggleTodoStatus(todoId) {
  return function(dispatch, getState) {
    const userId = getUserId(getState());

    dispatch({ type: TOGGLE_TODO_STATUS_LOADING });
    todosApi
      .toggleTodoStatus(userId, todoId)
      .then(
        () => dispatch({ type: TOGGLE_TODO_STATUS_SUCCESS }),
        error => dispatch({ type: TOGGLE_TODO_STATUS_ERROR, error })
      );
  };
}

export function listenForTodoUpdates() {
  return function(dispatch, getState) {
    const userId = getUserId(getState());
    todosApi.listenForTodoUpdates(userId, todos => {
      todos = todos || [];
      dispatch({ type: TODOS_UPDATED, todos });
    });
  };
}

export function stopListeningForTodoUpdates() {
  return function(dispatch, getState) {
    const userId = getUserId(getState());
    todosApi.stopListeningForTodoUpdates(userId);
  };
}
