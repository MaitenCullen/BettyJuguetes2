

import './styleItem.css';
import ItemCount from './ItemCount';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './components.css';
import Button from 'react-bootstrap/Button';
import { BsStars } from "react-icons/bs";
import { CartContext } from './context/CartContext';
import React, { useContext } from 'react';
  


const ItemDetail =(props) => {
  const [counter, setCounter] = useState(0)
  const [message, setMessage] = useState (false)
  const navigate = useNavigate ()
  const [ buyProduct, setBuyProduct] = useState (false)

  const context = useContext(CartContext)
  

  const onAdd = (cantidad) => {
    setMessage(`agregaste ${cantidad} items carrito`)
    setBuyProduct(true)
    const data = {
      cantidad:cantidad,
      producto:props.producto.Producto,
      id:props.producto.id,
      precio:props.producto.precio,
      imagen:props.producto.imagen,
      descripcion:props.producto.Descripcion,
      precioTotal:props.producto.precio*cantidad
    }
    context.addItem(data)
    
}

const item = props.producto

  return (
  <div>
    <div className="card_body">
      <div className="half">
        <div className="title">
          <h3 >{item.Producto}</h3>
        </div>
        <div>
          <img src={item.imagen} alt="" className='img_detail'/>
        </div>
      </div>
      <div className="half2">
        <div className="description">
          <h4>{item.Descripcion}</h4>
          <p>{item.detalle}</p>
        </div>
        <div className="reviews">
          <ul className="stars">
            <li><BsStars/></li>
            <li><BsStars/></li>
            <li><BsStars/></li>
            <li><BsStars/></li>
            <li><BsStars/></li>
          </ul>
        </div>
        <span className="stock"> hay stock</span>
        <p className="price">${item.precio}</p>
        <div className="text_products">
          <div id="Product_add">
                    {/* rendering condicional varias opciones */}
                    {message === '' || <p> {message}</p>}
                    {/* {message && <p> {message} </p>}
                    {message === "" ? "" : <p> {message}</p>} */}
            </div> 
            <div className="action">
              {/* si buyProduct es true mostrame el boton, sino llevame a itemCount */}
            { buyProduct ?
            <div> 
              <Button id='button_product1' onClick={()=>{navigate(`/Cart`)}}> Ir al carrito</Button>
              <Button id='button_product2'onClick={()=>{navigate(`/categorias`)}}>Seguir comprando</Button>
            </div>
            : <ItemCount counter={counter} setCounter={setCounter} stock ={10} onAdd={onAdd} />}
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}



  

export default ItemDetail


