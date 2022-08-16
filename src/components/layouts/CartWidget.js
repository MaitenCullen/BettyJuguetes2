import {GiShoppingCart} from 'react-icons/gi';
import {CartContext} from '../context/CartContext'
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


function Cart() {
     /*SOLO MONTARLO SI TIENE ICONOS EN EL CARRITO*/
 const context = useContext(CartContext)
  return (
       <div className='Cart_Div'>
        <Link to={`./Cart`}>
        <GiShoppingCart className='Cart1'/> 
        {context.totalItems}
        </Link>
       </div>
  );
}

export default Cart;