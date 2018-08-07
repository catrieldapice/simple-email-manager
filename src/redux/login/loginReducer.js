import { LOGIN_INIT, LOGIN_SUCCESS, LOGIN_FAILURE } from './loginActionsTypes';

let user = localStorage.getItem('user');
const initialState = user
  ? { loggedIn: true, user, error: '', loginStatus: 'LOGOUT' }
  : {};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_INIT:
      return {
        ...state,
        error: undefined,
        loginStatus: 'LOGIN_FETCHING',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loginStatus: 'LOGIN_SUCC',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        loginStatus: 'LOGIN_KSI',
      };

    default:
      return state;
  }
};
