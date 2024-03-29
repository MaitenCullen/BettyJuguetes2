import {GiShoppingCart} from 'react-icons/gi';
import {CartContext} from '../context/CartContext'
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';




function CartWidget() {
     /*SOLO MONTARLO SI TIENE ICONOS EN EL CARRITO*/
 const context = useContext(CartContext)
  return (
       <div className='Cart_Div'>
        <Link to={`./Cart`}>
        <GiShoppingCart className='Cart1'/> 
        {context.cart.length ? context.totalItems : null }
        </Link>
       </div>
  );
}

export default CartWidget;