import React from 'react'

import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import {useState} from 'react';
import './components.css';



const Item = (props) => {
    const [message, setMessage] = useState (false)
    const onAdd = (cantidad) => {
        setMessage(`agregaste ${cantidad} items carrito`)
    }

  return (
    <div>
      <Card style={{ width: '18rem', height:'18rem', margin: '3px'}}>
      <Card.Img variant="top" src={props.imagen} style={{height: '18rem'}}/>
      <Card.Body className='item_cart'>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
        <p id="Product_add">
                {/* rendering condicional varias opciones */}
                {message === '' || <p> {message}</p>}
                {/* {message && <p> {message} </p>}
                {message === "" ? "" : <p> {message}</p>} */}
        </p>
        <ItemCount initial={0} stock ={10} onAdd={onAdd}/>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}






export default Item;