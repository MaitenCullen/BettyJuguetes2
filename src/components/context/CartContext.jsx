import { useState } from 'react'
import { createContext } from 'react'


export const CartContext = createContext({});

const CartProvider = ({ children }) => {
const [cart, setCart] = useState([])
const [cartTotal, setTotal] = useState(0)
const [totalItems, setTotalItems] = useState(0)

const addItem = (data) => {
const isInCart = cart.some((productos) => productos.id === data.id);
 if ( !isInCart ) {
  setCart([...cart, data]);
  cantInCard(data.cantidad)
  }
}

function removeItem(id) {
  setCart(cart.filter((productos) => productos.id !== id));
}


const clear = () => {
  setCart([])
  setTotalItems(0)
  setTotal(0)
}

const totalPrice = () => {
  let totalAmount = 0;
  cart.map(producto => {
    totalAmount = totalAmount + producto.precioTotal;
  })
  setTotal(totalAmount)

}

const cantInCard = (cantidad) => {
  let cardItem = !totalItems ? cantidad : totalItems + cantidad;
  setTotalItems(cardItem)
}


const valueForChildren = {  
  cart,
  clear,
  addItem,
  removeItem,
  totalPrice,
  cartTotal,
  cantInCard,
  totalItems,
}
  return (
    <CartContext.Provider value={valueForChildren}>
        {children} 
    </CartContext.Provider>
  );
}

export default CartProvider;
