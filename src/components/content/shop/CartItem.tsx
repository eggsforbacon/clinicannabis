import {CartItem as ItemType} from "../../../interfaces/interfaces";

export const CartItem = (
    props : {
        item : ItemType
    }
) => {
    return (
        <li>
            { props.item.name }
        </li>
    );
}