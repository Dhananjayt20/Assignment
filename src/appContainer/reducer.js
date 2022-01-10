import produce from 'immer';
import { setGlobalError, setCurrentNetworkState } from './actions';
import { isEmpty } from 'lodash';
import { BackHandler } from 'react-native';

export const initialState = {
    isLoading: false,
    error: {},
    isError: false,
    networkConnected: false,
};

let handler = '';

export default (state = initialState, action) =>
    produce(state, draft => {
        if (action.type.includes('/REQUEST')) {
            draft.error = {};
            draft.isError = false;
            if (action.payload && action.payload.isLoading) {
                draft.isLoading = true;
                handler = BackHandler.addEventListener(
                    'hardwareBackPress',
                    function () {
                        return true;
                    },
                );
            }
        } else if (action.type.includes('/FULFILL')) {
            if (action.payload && !action.payload.isLoading) {
                draft.isLoading = false;
                handler.remove();
            }
        }
        switch (action.type) {
            case setCurrentNetworkState.TRIGGER: {
                draft.networkConnected = action.payload;
                break;
            }

            case setGlobalError.SUCCESS: {
                if (isEmpty(action.payload)) {
                    draft.error = {
                        title: 'Error',
                        message: 'Some error occurred. Please try again',
                    };
                } else {
                    const { error } = action.payload;
                    draft.error = error;
                }
                draft.isError = true;
                break;
            }
            default: {
                break;
            }
        }
    });
