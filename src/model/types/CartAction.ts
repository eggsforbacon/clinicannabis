import {CartItem} from "../../interfaces/interfaces";

export type CartAction =
    { type: 'addItem', payload: CartItem } |
    { type: 'removeItem', payload: CartItem } |
    { type: 'incrementItem', payload: { id: string } } |
    { type: 'decrementItem', payload: { id: string } }