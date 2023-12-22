import {CartItem as ItemType} from "../../../interfaces/interfaces";
import {DashSquare, PlusSquare, Trash3} from "./../../icons";
import React, {useState} from "react";

export const CartItem = (
    props : {
        item : ItemType
    }
) => {

    const [showButtons, setShowButtons] = useState(false);

    const handleHover = (e: React.MouseEvent<HTMLLIElement>) => {
        e.preventDefault();
        setShowButtons(!showButtons);
    };

    return (
        <li onMouseEnter={handleHover} onMouseLeave={handleHover}
            className={"w-full px-8 py-2 h-16 border-b-2 border-solid border-neutral-300 flex items-center justify-between"}>
            <p className={"max-w-[14rem] truncate"}>{ props.item.name }</p>
            <section className={`flex items-center justify-end gap-5 transition duration-300 ease-in-out`}>
                <button>
                    <DashSquare size={28} className={`text-neutral-400 transition duration-300 ease-in-out ${showButtons ? "opacity-100" : "opacity-0"}  lg:hover:text-caribbean-green`}/>
                </button>
                <p>x{ props.item.quantity }</p>
                <button>
                    <PlusSquare size={28} className={`text-neutral-400 transition duration-300 ease-in-out ${showButtons ? "opacity-100" : "opacity-0"}  lg:hover:text-caribbean-green`}/>
                </button>
                <p>${ props.item.price }</p>
                <button>
                    <Trash3 size={28} className={`text-neutral-300 transition duration-400 ease-in-out lg:hover:text-red-500`}/>
                </button>
            </section>
        </li>
    );
}