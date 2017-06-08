import { combineReducers } from 'redux';
import currPage from './page-reducer';

const appReducer = combineReducers({
  currPage
});

export default appReducer;
