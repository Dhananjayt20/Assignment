import { createSelector } from 'reselect';

import { initialState } from './reducer';
import REDUCER_KEY from '../store/reducerKeys';

const selectGlobalSubStore = store =>
  store[REDUCER_KEY.APP_REDUCER] || initialState;

const isLoadingSelector = createSelector(
  selectGlobalSubStore,
  globalState => globalState.isLoading,
);

const selectGlobalError = createSelector(
  selectGlobalSubStore,
  globalState => globalState.error,
);

const selectIsGlobalError = createSelector(
  selectGlobalSubStore,
  globalState => globalState.isError,
);

const getNetworkStateSelector = createSelector(
  selectGlobalSubStore,
  globalState => {
    return globalState.networkConnected;
  },
);

export {
  selectGlobalSubStore,
  isLoadingSelector,
  selectGlobalError,
  selectIsGlobalError,
  getNetworkStateSelector,
};
