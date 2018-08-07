// import { login } from '../services/user';
import {
  LOGIN_INIT,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from './loginActionsTypes';
import { history } from '../history';

const loginInit = () => ({
  type: LOGIN_INIT,
});

const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error: error.error._description,
});

const logoutInit = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
};

const SDK = {
  username: 'cato',
};

const checkCredentials = async (usr, psw) => {
  const data = {
    username: 'cato',
    password: 'dapice',
  };
  return data;
};

//actions
const login = (username, password) => async dispatch => {
  dispatch(loginInit());
  try {
    await checkCredentials(username, password)
      .then(
        user => {
          dispatch(loginSuccess(user));
          history.push('/');
        },
        error => {
          dispatch(loginFailure(error));
        },
      )
      .catch(error => dispatch(loginFailure(error)));
  } catch (error) {
    console.log(error);
  }
};

const logout = () => {
  logoutInit();
  return { type: LOGOUT };
};

export { login, logout };
