import { all } from 'redux-saga/effects';
import UsersSaga from '../containers/User/redux/saga';

function* rootSaga() {
  yield all([UsersSaga()]);
}
export default rootSaga;
