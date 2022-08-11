import { Button } from "react-bootstrap";
import { CartContext } from './context/CartContext';
import React, { useContext } from 'react';
  



const Cart = () => {
const context = useContext(CartContext)

const removeProduct = (id)=> {
    context.removeItem(id)
}
return (
    <>
    {context.cart.map((producto, index)=> {
        return (
            <div className="Cart" key={index}>
                <h1>Cart</h1>
                <Button>{producto.producto}</Button>
                <Button>{producto.precio}</Button>
                <Button onClick={()=>removeProduct(producto.id)}>eliminar</Button>
                <Button onClick={context.clear}>Eliminar todo el carrito</Button>
            </div>
        );
    })}
    </>
)
   
};


export default Cart;