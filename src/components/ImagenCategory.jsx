

import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './styleItem.css';

function ImagenCategory(props) {
    return (
        <>
         {props.category.map((item, imagen) => {
            return (
              <div key={imagen.imagen}>
                <Link to={`/${item.category}`}>
                <div>
                    <Image  src={item.imagen} className='image_category'/>
                </div>                  
                </Link>   
              </div>                
            );
          })}
        </>
      );
}

export default ImagenCategory