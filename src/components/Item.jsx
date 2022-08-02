import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import './components.css';
import { Link } from 'react-router-dom';



const Item = (props) => {
   
  return (
    <div>
      <Link className="link_style" to={`/item/${props.id}`}>
        <Card>
        <Card.Img variant="top" src={props.imagen} className="img_card"/>
        <Card.Body className='item_cart'>
          <Card.Title>{props.titulo}</Card.Title>
          <Card.Text>
            {props.descripcion}
          </Card.Text>       
          <Button id='button_detail'> Detalles </Button>
        </Card.Body>
      </Card>    
    </Link>
   </div>
  )
}






export default Item;