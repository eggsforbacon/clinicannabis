import Link from "next/link";
import {strings} from "../../../model/strings";
import React, {useContext, useEffect} from "react";
import {CartContext} from "../../../context/CartContext";
import {CartItem} from "./CartItem";
import {CartItem as ItemType} from "../../../interfaces/interfaces"

const Cart = (
    props : {
        open : [boolean, any],

    }
) => {

    const cartOpen = props.open[0];
    const setCartOpen = props.open[1];

    const { cartState } = useContext( CartContext );
    console.log("Context always wraps in _app.js", cartState)
    const { items } = cartState;

    return (
        <section
            className={`absolute rounded-bl-3xl border-solid border-2 shadow-md border-neutral-300 -bottom-[26rem] pb-16 pt-4 px-8 -right-1 transition-opacity duration-500 ease-in-out w-128 h-112 ${cartOpen ? "opacity-100" : "opacity-0"}`}>
            <ul>
                {
                    items.map(item => <CartItem key={item.id} item={ item } />)
                }
            </ul>
        </section>
    );
}

export default Cart;