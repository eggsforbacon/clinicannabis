import { createContext } from "react";
import {CartState} from "../interfaces/interfaces";

export type CartContextProps = {
    cartState : CartState
}

export const CartContext = createContext({} as CartContextProps);

