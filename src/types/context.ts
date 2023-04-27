

export type User = {
    // Define las propiedades de usuario aquí
};

export type Action = {
    type: string;
    payload?: any;
};

export type State = {
    user: null | User;
    tokenUser: null | string;
};

type Dispatch = (action: Action) => void;