

import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styleItem.css';

function ImageCategory(props) {
  return (
    <>
      {props.category.map((item, index) => {
        return (
          <div key={index}>
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

export default ImageCategory;