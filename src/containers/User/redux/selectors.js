import { createSelector } from 'reselect';
import { initialState } from './reducer';
import REDUCER_KEY from '../../../store/reducerKeys';

const selectGlobalSubStore = store =>
    store[REDUCER_KEY.USER_REDUCER] || initialState;

const getUserDataSelector = createSelector(
    selectGlobalSubStore,
    globalState => {
        return globalState.usersData;
    },
);

export { getUserDataSelector };
