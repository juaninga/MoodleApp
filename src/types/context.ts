import { ReactNode } from "react";
import { SiteInfo } from "./moodle";


export type User = {
    tokenUser: string;
};

export type Action = {
    type: string;
    payload?: any;
};

export type State = {
    user: null | User;
    siteInfo: null | SiteInfo;
};

export type Props = {
    children: ReactNode;
};

export type UserContextType = {
    user: User | null;
    siteInfo: SiteInfo | null;
    setUser: (user: User) => void;
    setSiteInfo: (siteInfo: SiteInfo) => void;
    signOut: () => void;
};
