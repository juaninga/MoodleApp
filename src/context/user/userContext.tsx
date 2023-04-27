import { createContext } from 'react';
import { UserContextType } from '../../types/context';



const userContext = createContext<UserContextType>({
    user: null,
    siteInfo: null,
    setUser: () => {},
    signOut: () => {},
    setSiteInfo: () => {},
});

export default userContext;