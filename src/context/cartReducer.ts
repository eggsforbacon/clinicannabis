import {CartState} from "../interfaces/interfaces";
import {CartAction} from "../model/types/CartAction";

export const cartReducer = (state : CartState, action : CartAction) : CartState => {
    switch (action.type) {
        case 'addItem':
            return {
                ...state,
                items: [ ...state.items, action.payload ]
            }
        default:
            return state;
    }
}