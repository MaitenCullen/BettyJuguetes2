import { Button } from "react-bootstrap";
import { CartContext } from './context/CartContext';
import React, { useContext } from 'react';
import CartProducts from "./CartProducts";
import './components.css';
import { useNavigate } from 'react-router-dom';



const Cart = () => {
const context = useContext(CartContext)
const navigate = useNavigate ()

return (
    <>
    {context.cart.length ? 
    <div id="table">
        
        <div >
        <ul id="tr_style">
            <li></li>
            <li>Producto</li>
            <li>Descripcion</li>
            <li>Precio unitario</li>
            <li>Cantidad</li>
            <li>Precio total</li>
        </ul>
        </div>
    <div>  
    {context.cart.map((producto, index)=> {
        return (
                 <CartProducts 
                 key={index}
                 cantidad={producto.cantidad}
                 id={producto.id}
                 precio={producto.precio}
                 producto={producto.producto}
                 imagen={producto.imagen}
                 descripcion={producto.descripcion}
                 precioTotal={producto.precioTotal}
                 />
        );
    })}
     </div>
        <div id="table_foot">
        <Button id='button_remove_all' onClick={context.clear}>Eliminar todo el carrito</Button>
        <Button onClick={context.totalPrice}>Total </Button> {context.cartTotal}
        <Button onClick={()=> navigate('/Checkout')}> Finalizar compra </Button>
        </div>
    </div> : 
    <div>
        <p>El carrito esta vacio</p>
        <Button id='button_product2'onClick={()=>{navigate(`/`)}}>Seguir comprando</Button>
    </div>

    
     }
    
    </>
)

};


export default Cart;