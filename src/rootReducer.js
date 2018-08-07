import { combineReducers } from 'redux';
import PlayerList from './reducers/login';
// import SearchFilter from './reducers/main';

const rootReducer = combineReducers({
  [PlayerList.constants.NAME]: PlayerList.reducer,
  //   [SearchFilter.constants.NAME]: SearchFilter.reducer,
});

export default rootReducer;
