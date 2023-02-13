import {CartContext} from "./CartContext";
import {useReducer} from "react";
import {cartReducer} from "./cartReducer";
import {CartState} from "../interfaces/interfaces";
import {randomUUID} from "crypto";

interface props {
    children: JSX.Element [] | JSX.Element
}

const INITIAL_STATE: CartState = {
    itemCount : 0,
    items : [],
    checked : false,
}

export const CartProvider = ({children}: props) => {

    const [cartState, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    return (
        <CartContext.Provider value={{cartState}}>
            {children}
        </CartContext.Provider>
    )
}