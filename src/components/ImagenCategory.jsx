

import React from 'react'
import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './styleItem.css';

function ImagenCategory(props) {
    console.log(props, "la props")
    return (
        <>
         {props.category.map((item) => {
            return (
                <Link to={`/${item.category}`}>
                <Card id='card_category'>
                    <Image  src={item.imagen} className='image_category'/>
                </Card>                  
                </Link>
                
            );
          })}
        </>
      );
}

export default ImagenCategory