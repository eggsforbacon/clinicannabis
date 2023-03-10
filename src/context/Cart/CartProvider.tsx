import {CartContext} from "./CartContext";
import {useReducer} from "react";
import {cartReducer} from "./cartReducer";
import {CartItem as ItemType, CartState} from "../../interfaces/interfaces";

interface props {
    children: JSX.Element [] | JSX.Element
}


const INITIAL_STATE: CartState = {
    itemCount : 0,
    items : [
        {
            "id" : "922c8156-8503-4cb7-96cc-0f49adeafd87",
            "name" : "Suero THC",
            "desc" : "Este suero te va a ayudar",
            "price" : 25000,
            "quantity" : 2
        },
        {
            "id" : "46f875ed-f189-4feb-a09c-39e238ebfd1b",
            "name" : "Suero THC plus",
            "desc" : "Este suero te va a ayudar más",
            "price" : 35000,
            "quantity" : 4
        },
        {
            "id" : "7f85593f-99c8-497e-beef-b037c313cf47",
            "name" : "Suero THC ultra",
            "desc" : "Este suero te va a ayudar mucho más",
            "price" : 45000,
            "quantity" : 1
        },
        {
            "id" : "e99c19dd-bc33-45d7-a12c-ad7059ea1558",
            "name" : "Suero THC max",
            "desc" : "Este suero te va a ayudar un chingo",
            "price" : 50000,
            "quantity" : 8
        },
        {
            "id" : "7f85593f-99c8-497e-beef-b037c313cf47",
            "name" : "Suero THC ultra",
            "desc" : "Este suero te va a ayudar mucho más",
            "price" : 45000,
            "quantity" : 1
        },
        {
            "id" : "e99c19dd-bc33-45d7-a12c-ad7059ea1558",
            "name" : "Suero THC max",
            "desc" : "Este suero te va a ayudar un chingo",
            "price" : 50000,
            "quantity" : 8
        },
        {
            "id" : "7f85593f-99c8-497e-beef-b037c313cf47",
            "name" : "Suero THC ultra",
            "desc" : "Este suero te va a ayudar mucho más",
            "price" : 45000,
            "quantity" : 1
        },
        {
            "id" : "e99c19dd-bc33-45d7-a12c-ad7059ea1558",
            "name" : "Suero THC max",
            "desc" : "Este suero te va a ayudar un chingo",
            "price" : 50000,
            "quantity" : 8
        }
    ],
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