import {
  LOGIN_STARTED,
  LOGIN_COMPLETED,
  LOGIN_ERROR,
  LOGOUT_STARTED,
  LOGOUT_COMPLETED,
  LOGOUT_ERROR
} from "../constants/user";
import * as userApi from "../api/userApi";

export const login = () => {
  return function(dispatch) {
    dispatch({ type: LOGIN_STARTED });
    return userApi
      .login()
      .then(
        result => dispatch({ type: LOGIN_COMPLETED, ...result }),
        error => dispatch({ type: LOGIN_ERROR, error })
      );
  };
};

export const logout = () => {
  return function(dispatch) {
    dispatch({ type: LOGOUT_STARTED });
    return userApi
      .logout()
      .then(
        () => dispatch({ type: LOGOUT_COMPLETED }),
        error => dispatch({ type: LOGOUT_ERROR, error })
      );
  };
};
