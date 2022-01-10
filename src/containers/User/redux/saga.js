import { call, put, takeLatest } from 'redux-saga/effects';
import { getUserData } from './actions';
import { api } from '../../../utils/axios';
import { setGlobalError } from '../../../appContainer/actions';

const GET_USER_DATA_API_URL = 'api/?results=100';

const getUserDataApiCall = () =>
  api({
    method: 'GET',
    url: `${GET_USER_DATA_API_URL}`,
  });

function* getUserDataRequest(action) {
  try {
    yield put(getUserData.request({ isLoading: true }));
    const response = yield call(getUserDataApiCall);
    if (response.success) {
      const { results } = response.data;
      yield put(getUserData.success({ results }));
    } else {
      yield put(setGlobalError.success(response));
    }
  } catch (error) {
    yield put(setGlobalError.success());
  } finally {
    yield put(getUserData.fulfill({ isLoading: false }));
  }
}

export default function* usersSaga() {
  yield takeLatest(getUserData.TRIGGER, getUserDataRequest);
}
