import { data } from 'autoprefixer';
import { useState } from 'react'
import { createContext } from 'react'

   /*1 nena, 1!!! crear context*/ 
export const CartContext = createContext({});

const CartProvider = ({ children }) => {
const [cart, setCart] = useState([])


const addItem = (data) => {
 const isInCart = cart.some((productos) => productos.id === data.id);
 if ( !isInCart ) {
  setCart([...cart, data])

}
}

const removeItem = (id) => {

  setCart(cart.filter((productos) => productos.id !== id))
}



const clear = () => {
setCart([])

}


const valueForChildren = {  
    cart,
    clear,
    addItem,
   removeItem,
}
  return (/*2 que vas a compartir? con los hijos*/
    <CartContext.Provider value={valueForChildren}>
        {children} 
    </CartContext.Provider>
  );
}

export default CartProvider;