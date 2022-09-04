
import './components.css';
import { CartContext } from './context/CartContext';
import React, { useContext } from 'react';


const CartProducts = (producto) => {
  const context = useContext(CartContext)
  const removeProduct = (id)=> {
    context.removeItem(id)
}
  return (
    <div>
       <ol className='table_color'>
          <li><img src={producto.imagen} alt="imagen producto" className='img_card_product'/></li>
          <li>{producto.producto}</li>
          <li>{producto.precio}</li>
          <li>{producto.cantidad}</li>
          <li>{producto.precioTotal}</li>
          <li><button id='button_remove' onClick={()=>removeProduct(producto.id)}>eliminar</button></li>
        </ol>
    </div>
  )
}

export default CartProducts;