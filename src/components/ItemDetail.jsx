
import React from 'react';
import './styleItem.css';
import ItemCount from './ItemCount';
import {useState} from 'react';
import './components.css';
import { BsStars } from "react-icons/bs";


const ItemDetail =(props) => {
  const [message, setMessage] = useState (false)
  const onAdd = (cantidad) => {
      setMessage(`agregaste ${cantidad} items carrito`)
  }
  const item = props.producto
console.log(props, "item")
  return (
  <div className="card">
    <div className="card_body">
      <div className="half">
        <div className="title">
          <h3 >{item.Producto}</h3>
          <p>{item.Descripcion}</p>
        </div>
        <div className="image">
          <img src={item.imagen} alt=""/>
        </div>
      </div>
      <div className="half2">
        <div className="description">
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
        <p className="price">{item.precio}</p>
      </div>
    </div>
    <div className="card_footer">
      <div className="text_products">
      <p id="Product_add">
                {/* rendering condicional varias opciones */}
                {message === '' || <p> {message}</p>}
                {/* {message && <p> {message} </p>}
                {message === "" ? "" : <p> {message}</p>} */}
        </p>
      </div>
      <div className="action">
      <ItemCount initial={0} stock ={10} onAdd={onAdd}/>
      </div>
    </div>
  </div>
  )
}

export default ItemDetail


