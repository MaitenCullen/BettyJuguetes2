
import React from 'react';
import './styleItem.css';
import ItemCount from './ItemCount';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './components.css';
import Button from 'react-bootstrap/Button';
import { BsStars } from "react-icons/bs";


const ItemDetail =(props) => {
  const [counter, setCounter] = useState(0)
  const [message, setMessage] = useState (false)
  const navigate = useNavigate ()
  const [ buyProduct, setBuyProduct] = useState (false)

  const onAdd = (cantidad) => {
    setMessage(`agregaste ${cantidad} items carrito`)
    setBuyProduct(true)
    console.log("cuantos productos hay", cantidad);
}

const item = props.producto

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
        <div className="text_products">
          <p id="Product_add">
                    {/* rendering condicional varias opciones */}
                    {message === '' || <p> {message}</p>}
                    {/* {message && <p> {message} </p>}
                    {message === "" ? "" : <p> {message}</p>} */}
            </p> 
            <div className="action">
              {/* si buyProduct es true mostrame el boton, sino llevame a itemCount */}
            { buyProduct ?
            <div> 
              <Button id='button_product1' onClick={()=>{navigate('./cart')}}> Ir al carrito</Button>
              <Button id='button_product2'onClick={()=>{navigate('./itemListContainer')}}>Seguir comprando</Button>
            </div>
            : <ItemCount counter={counter} setCounter={setCounter} stock ={10} onAdd={onAdd}/>}
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}



  

export default ItemDetail


