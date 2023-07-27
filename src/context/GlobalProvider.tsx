import {ReactNode, useReducer} from "react";
import {globalReducer} from "./globalReducer";
import GlobalContext from "./GlobalContext";

type _PProps = {
    children :ReactNode | ReactNode[],
}

export const GlobalProvider = (props : _PProps) => {
    const defaultState = {
        hasWindow : false,
        loadedOnce: false,
    }

    const [globalState, dispatch] = useReducer(globalReducer, defaultState);

    const disableAnimation = () => {
        dispatch({type: "animation", payload: null});
        return globalState.loadedOnce;
    }

    const enableWindow = () => {
        dispatch({type: "window", payload: null});
        return globalState.hasWindow;
    }

    return (
        <GlobalContext.Provider value={{
            ...globalState,
            enableWindow,
            disableAnimation
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}
