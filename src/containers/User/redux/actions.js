import { createRoutine } from 'redux-saga-routines';
import { GET_USER_DATA, RESET_DATA } from './constants';

export const getUserData = createRoutine(GET_USER_DATA);
export const resetData = createRoutine(RESET_DATA);
