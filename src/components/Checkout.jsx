import { addDoc, collection, serverTimestamp} from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from './context/CartContext';
import { db } from './firestore/Firestore';
import { useNavigate } from 'react-router-dom';
import './components.css';
function Checkout() {
    const navigate = useNavigate ()
    const context = useContext(CartContext)
    const[comprador, setComprador] = useState({})
    const [orderId, setOrderId] =useState('')

    const datosComprador = (event) => {
        setComprador({
            ...comprador,
            [event.target.name]: event.target.value,
            [event.target.direction]: event.target.value,
            [event.target.telefone]: event.target.value,
            [event.target.email]: event.target.value,
        })  
    }
const terminarCompra =(event) => {
    event.preventDefault()
    const totalVentas = collection(db, "ventas")
    addDoc(totalVentas, {
        comprador,
        productos: context.cart,
        total: context.cartTotal,
        fecha: serverTimestamp()
         })
         .then ((response) => {
            setOrderId(response.id)
            if (response) {
                context.clear()
            }
        })
        .catch ((error)=> console.log(error))
    }

  return (
    <div className='div_fin'>
    {!orderId ?
        <div className='form_div'>
        <h2> holii ya es el final de tu compra</h2>
        <form onSubmit={terminarCompra} className='form_style'>
            <input type="text" placeholder='nombre completo' name='name' onChange={datosComprador}/>
            <input type="text" placeholder='dirección de entrega' name='direction' onChange={datosComprador}/>
            <input type="number" placeholder='telefono' name='telefone' onChange={datosComprador}/>
            <input type="email" placeholder='cualestumail@example.com' name='email' onChange={datosComprador}/>
            <button type='submit'>finalizar compra</button>
        </form>
    </div> :
    <div className='order_div'>
        <h2> muchas gracias por confiar en nosotros</h2>
        <p> su numero de orden es: {orderId}</p>
        <button onClick={()=> navigate('/')}> volver a inicio</button>
    </div>}
    </div>
  )
}

export default Checkout