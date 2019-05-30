import {
  LOGIN_STARTED,
  LOGIN_COMPLETED,
  LOGIN_ERROR,
  LOGOUT_STARTED,
  LOGOUT_COMPLETED,
  LOGOUT_ERROR
} from "../constants/user";
import * as userApi from "../api/userApi";
import {
  listenForTodoUpdates,
  stopListeningForTodoUpdates
} from "../actions/todos";

export const login = () => {
  return function(dispatch) {
    dispatch({ type: LOGIN_STARTED });
    return userApi.login().then(
      result => {
        dispatch({ type: LOGIN_COMPLETED, ...result });
        dispatch(listenForTodoUpdates(result.user.uid));
      },
      error => dispatch({ type: LOGIN_ERROR, error })
    );
  };
};

export const logout = () => {
  return function(dispatch, getState) {
    const state = getState();
    const userId = state.user.details.uid;

    dispatch({ type: LOGOUT_STARTED });
    return userApi.logout().then(
      () => {
        dispatch({ type: LOGOUT_COMPLETED });
        dispatch(stopListeningForTodoUpdates(userId));
      },
      error => dispatch({ type: LOGOUT_ERROR, error })
    );
  };
};
