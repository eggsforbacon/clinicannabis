import React, {createContext, Dispatch, SetStateAction} from 'react';

interface INavbarContext {
    logoShown : boolean,
    setLogoShown : Dispatch<SetStateAction<boolean>>,
}

const defaultState = {
    logoShown : false,
    setLogoShown : () : boolean => false,
}

const NavbarContext = createContext<INavbarContext>(defaultState);

export default NavbarContext;