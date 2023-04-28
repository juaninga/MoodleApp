import React, { useReducer, ReactNode } from 'react';
import UserReducer from './userReducer';
import UserContext from './userContext';
import { USER, SIGN_OUT, SITE_INFO } from './types';
import { State, User, Props } from '../../types/context';
import { SiteInfo } from '../../types/moodle';


const UserState = (props: Props) => {
    const initialState: State = {
        user : null,
        siteInfo: null,
    }
    
    const [ state, dispatch ] = useReducer(UserReducer, initialState);

    const setUser = (user: User) => {
        dispatch({
            type: USER,
            payload: user,
        });
    }

    const setSiteInfo = (siteInfo: SiteInfo) => {
        dispatch({
            type: SITE_INFO,
            payload: siteInfo,
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
                siteInfo: state.siteInfo,   // Guarda en el context la información del sitio
                setUser,            // Autentifica al usuario
                signOut,            // Cierra la sesión del usuario
                setSiteInfo,        // Guarda la información del sitio
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}

export default UserState;



