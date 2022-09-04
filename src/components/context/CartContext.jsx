import { useState } from 'react'
import { createContext } from 'react'


export const CartContext = createContext({});

const CartProvider = ({ children }) => {
const [cart, setCart] = useState([])
const [cartTotal, setCartTotal] = useState(0)
const [totalItems, setTotalItems] = useState(0)
const [mayor, setMayor] = useState()




const addItem = (data) => {
  const isInCart = cart.find((producto)=> producto.id === data.id)
  if(isInCart){
      const updatedCart = cart.map((producto)=>{
          if(producto.id === data.id){
              return {...data, cantidad: producto.cantidad + data.cantidad}
          }
          else{
              return producto            
          }
      })
      setCart(updatedCart)
      cantInCard(data.cantidad)
  }else{
      setCart([...cart, data])
      cantInCard(data.cantidad)
  }   
}

function removeItem(id) {
  setCart(cart.filter((productos) => productos.id !== id));
}


const clear = () => {
  setCart([])
  setTotalItems(0)
  setCartTotal(0)
}

const totalPrice = () => {
  let totalAmount = 0;
  cart.map(producto => {
    return totalAmount = totalAmount + (producto.cantidad * producto.precio);
  })
  setCartTotal(totalAmount)
}

const cantInCard = (cantidad) => {
  let cardItem = !totalItems ? cantidad : totalItems + cantidad;
  setTotalItems(cardItem)
}

const edadAdulta = (esMayor) => {
 setMayor(esMayor)}

const valueForChildren = {  
  cart,
  clear,
  addItem,
  removeItem,
  totalPrice,
  cartTotal,
  cantInCard,
  totalItems,
  edadAdulta,
  mayor,
}
  return (
    <CartContext.Provider value={valueForChildren}>
        {children} 
    </CartContext.Provider>
  );
}

export default CartProvider;
