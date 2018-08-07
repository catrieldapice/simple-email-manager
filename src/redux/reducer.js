import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer';
// import filtersReducer from './filters/filterReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  //   players: playersReducer,
});

export default rootReducer;
