import React, { useReducer, ReactNode } from 'react';
import UserReducer from './userReducer';
import UserContext from './userContext';
import { USER, SIGN_OUT } from './types';
import { State, User } from '../../types/context';

type Props = {
    children: ReactNode;
};


const UserState = (props: Props) => {
    const initialState: State = {
        user : null,
        tokenUser: null,
    }
    
    const [ state, dispatch ] = useReducer(UserReducer, initialState);

    const setUser = (user: User) => {
        dispatch({
            type: USER,
            payload: user,
        });
    }

    const signOut = () => {
        dispatch({
            type: SIGN_OUT,
        })
    }

    return(
        <UserContext.Provider
            value={{
                user: state.user,   // Guarda en el context el usuario
                setUser,            // Autentifica al usuario
                signOut,            // Cierra la sesión del usuario
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}

export default UserState;