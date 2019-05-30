import {
  LOGIN_STARTED,
  LOGIN_COMPLETED,
  LOGIN_ERROR,
  LOGOUT_STARTED,
  LOGOUT_COMPLETED,
  LOGOUT_ERROR
} from "../constants/user";

const intialState = {
  details: null,
  isLoggedIn: false,
  isLoading: false,
  error: null
};

const user = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_COMPLETED:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        details: action.user
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        error: action.error
      };
    case LOGOUT_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case LOGOUT_COMPLETED:
      return {
        ...state,
        details: null,
        isLoggedIn: false,
        isLoading: false
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default user;
