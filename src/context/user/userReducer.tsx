import {
    USER, SIGN_OUT
} from './types';

const UserReducer = (state: any, action: any) => {
    switch(action.type) {

        case USER:
            return {
                ...state,
                user: action.payload,
            }

        case SIGN_OUT:
            return {
                ...state,
                user: null,
                admin: false,
                ready: false,
                premium: false,
            }  

        default:
            return state;
    }
}

export default UserReducer;