import "./products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./icons";
import { useCart } from "../hooks/useCart";


/* muestro la lista de productos con botones para agregar al carrito */
export function Products( {products} ) {

    /* uso el contexto del carrito */
    const { addToCart, removeFromCart, cart } = useCart()

    /* muestro los productos seleccionados */
    const checkedProduct = product => {
        return cart.some(item => item.id == product.id)
    }
    
    return (
        <>
        <main>
            <div className="container">
                <div className="card-container">
                    
                    {products?.map((product) => {

                        const isProductIn = checkedProduct(product)

                        return (
                            <div className="card" key={product.id}>
                                <div className="card-content">
                                    <img src={product.image} alt={product.title} width={100} height={100}/> 
                                    
                                    <strong>{product.title}</strong>  

                                    <h3>${product.price}</h3>
                                    
                                    <div className="shopping-cart"

                                            style={{backgroundColor: isProductIn ? 'red' : 'green'}}

                                            onClick={() => {
                                                isProductIn 
                                                ? removeFromCart (product)
                                                : addToCart(product)
                                            }}
                                            >
                                            {
                                                isProductIn 
                                                ? <RemoveFromCartIcon/>
                                                : <AddToCartIcon />
                                            }
                                        
                                    </div>                                                    
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
        </>
    )
}