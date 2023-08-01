import {createContext} from "react";

export type TGlobalContext = {
    loadedOnce : boolean,
    hasWindow : boolean,
    disableAnimation : () => boolean,
    enableWindow : () => boolean,
}

const GlobalContext = createContext<TGlobalContext>({} as TGlobalContext);

export default GlobalContext;

