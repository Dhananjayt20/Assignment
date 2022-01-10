import { combineReducers } from 'redux';
import REDUCER_KEY from './reducerKeys';
import AppReducer from '../appContainer/reducer';
import UsersReducer from '../containers/User/redux/reducer';

export default () =>
  combineReducers({
    [REDUCER_KEY.APP_REDUCER]: AppReducer,
    [REDUCER_KEY.USER_REDUCER]: UsersReducer,
  });
