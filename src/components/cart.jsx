import './cart.css'
import { useId } from "react";
import {  CartIcon, RemoveFromCartIcon } from "./icons";
import { useCart } from "../hooks/useCart";

/* muestro un producto en el carrito con su imagen, título, precio y botón para eliminarlo */
export function CartItem({price, title, image, removeFromCart}) {
    return (
        <li>
            <img src={image} alt={title} />
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer onClick={removeFromCart}>
                <button><RemoveFromCartIcon/></button>
            </footer>
        </li>
    )
}

/* muestro el carrito completo con la lista de productos y el precio total. */
export function Cart(){

    const cartCheckboxId = useId()
    const { cart, removeFromCart} = useCart() 

    const totalPrecio = cart.reduce((total, product) => {
        console.log(product.price);
        return total + product.price;
      }, 0);
    
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />
            <aside className="cart">
                <div className='cart-products'>
                    <ul>
                        { 
                            cart.map(product => (
                                <CartItem 
                                    key={product.id}
                                    removeFromCart={()=> removeFromCart(product)}
                                    {...product}
                                />
                            ))
                            
                        }
                    </ul>
                </div>
                
                <div className='cart-total-price'>
                    Total Precio: <strong>${totalPrecio.toFixed(2)}</strong>
                </div>
            </aside>
        </>
    )
}

