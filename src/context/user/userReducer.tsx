import { USER, SIGN_OUT } from './types';
import { State, User, Action } from '../../types/context';

const UserReducer = (state: State, action: Action) => {
    switch(action.type) {

        case USER:
            return {
                ...state,
                user: action.payload,
                token: action.payload,
            }

        case SIGN_OUT:
            return {
                ...state,
                user: null,
                token: null,
            }  

        default:
            return state;
    }
}

export default UserReducer;