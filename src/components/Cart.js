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
        <div className="table1"> 
            <ul className="tr_style">
                <li></li>
                <li>Producto</li>
                <li>Precio unitario</li>
                <li>Cantidad</li>
                <li>Precio total</li>
            </ul>
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
                    precioTotal={producto.precioTotal}
                    />
            );
        })}
        </div>
            <div className="table_foot">
            <button id="button01" onClick={context.clear}>Eliminar todo el carrito</button>
            <button id="button02" onClick={context.totalPrice}> Total </button> <span className="cart_total">{context.cartTotal}</span>
            <button id="button03" onClick={()=> navigate('/Checkout')}> Finalizar compra </button>
            </div>
        </div> : 
        <div className="enty_cart">
            <p>El carrito esta vacio</p>
            <button id='button04'onClick={()=>navigate('/categorias')}>Ir a Comprar</button>
        </div>
        }
        </>
    )
};
export default Cart;