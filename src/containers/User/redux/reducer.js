import produce from 'immer';
import { getUserData } from './actions';

export const initialState = {
    usersData: {},
};

export default (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case getUserData.TRIGGER: {
                draft.usersData = {};
                break;
            }
            case getUserData.SUCCESS: {
                const { results } = action.payload;
                draft.usersData = results;
                break;
            }
            default: {
                break;
            }
        }
    });
