import { createContext, useReducer } from "react";

/* creo el context del carrito */
export const CartContext = createContext()

/* estado inicial vacío */
const initialState = []

/* agregar al carrito o eliminar, devolviendo un nuevo estado modificado*/
const reducer = (state, action) => {
    const {type: actionType, payload:actionPayload} = action
    
    switch (actionType){
        case 'ADD_TO_CART':{
            const { id } = actionPayload
            const productInCartIndex = state.findIndex(item => item.id == id)

            if (productInCartIndex >= 0) {
                const newState= structuredClone(state)
                return newState
            }
            return [
                ...state,
                {
                    ...actionPayload
                }
            ]
        }

        case 'REMOVE_FROM_CART':{
            const {id} = actionPayload
            return state.filter(item => item.id != id)
        }

    }
    return state
}

/* proporciona el contexto del carrito, utilizando un estado compartido y devolviendo
estas funciones a los componentes hijos. */
export function CartProvider({children}) {

   const [state, dispatch] = useReducer(reducer, initialState)

   const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
   })

   const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
   })

    return (
        <CartContext.Provider value={{
            cart: state, 
            addToCart,
            removeFromCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}