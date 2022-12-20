import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import './components.css';
import { Link } from 'react-router-dom';



const Item = (props) => {
  return (
    <div className='card_product'>
      <Link id="link_style" to={`/item/${props.id}`}>
        <div>
        <img src={props.imagen} id="img_card" alt='producto'/>
        <div id='item_cart'>
          <p>{props.titulo}</p>
          <p>
            {props.descripcion}
          </p>       
          <Button id='button_detail'> Detalles </Button>
        </div>
      </div>    
    </Link>
   </div>
  )
}

export default Item;