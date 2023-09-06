import { useContext } from "react";
import { CartContext } from "../context/cart.jsx";

/* custom hook para usar el contexto del carrito*/
export function useCart() {
    const context = useContext(CartContext) 

    if (context == undefined) {
        throw new Error ('useCart must be used within a cartProvider')
    }

    return context
}
