export type GlobalState = {
    hasWindow: boolean,
    loadedOnce : boolean,
}

type GlobalAction =
    | { type: "animation", payload: null }
    | { type: "window", payload: null }

export const globalReducer = (state: GlobalState, action: GlobalAction): GlobalState => {
    switch (action.type) {
        case "window":
            return {
                ...state,
                hasWindow: true,
            }
        case "animation":
            return {
                ...state,
                loadedOnce : true
            }
        default:
            return state;
    }
}