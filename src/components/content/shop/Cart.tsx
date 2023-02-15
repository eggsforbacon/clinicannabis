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
    const { items } = cartState;

    return (
        <section
            className={`flex flex-col items-start justify-start gap-4 overflow-y-clip z-0 absolute rounded-b-3xl border-solid border-2 shadow-md border-neutral-300 -bottom-[26rem] py-4 px-8 right-0 transition-opacity duration-500 ease-in-out w-144 h-112 ${cartOpen ? "opacity-100" : "opacity-0"}`}>
            <h2 className={"text-3xl text-caribbean-green"}>Mi carrito</h2>
            <ul className={"relative w-full h-[17rem] scrollbar-none overflow-y-scroll"}>
                {
                    items.map(item => <CartItem key={item.id} item={ item } />)
                }
            </ul>
            <section className={"flex items-center justify-evenly w-full"}>
                <button className={"py-2 px-16 rounded-full border-solid border-neutral-400 border-2 text-neutral-400 font-normal w-56 shadow-md transition duration-300 quartic-in-out lg:hover:scale-105 lg:hover:border-red-500 lg:hover:bg-red-500 lg:hover:text-white"}>Vaciar</button>
                <button className={"py-2 px-16 rounded-full border-solid border-neutral-400 border-2 text-neutral-400 font-normal w-56 shadow-md transition duration-300 quartic-in-out lg:hover:scale-105 lg:hover:border-viridian-green lg:hover:bg-viridian-green lg:hover:text-white"}>Checkout</button>
            </section>
        </section>
    );
}

export default Cart;