
import React from 'react';
import Item from './Item';
import './components.css';


const ItemList = (props) => {
  return (
    <>
     {props.productos.map((item, index) => {
        return (
          <div key={index} className='card1'>
            <Item 
              key = {item.id} 
              id={item.id} 
              category={item.category}
              titulo={item.Producto}
              imagen={item.imagen} 
              descripcion={ item.Descripcion}
            />
          </div>         
        );
      })}
    </>
  );
}

export default ItemList;