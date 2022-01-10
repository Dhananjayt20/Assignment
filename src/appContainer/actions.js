import { createRoutine } from 'redux-saga-routines';
import { SET_GLOBAL_ERRORS, SET_NETWORK_STATE } from './constants';

export const setGlobalError = createRoutine(SET_GLOBAL_ERRORS);
export const setCurrentNetworkState = createRoutine(SET_NETWORK_STATE);
