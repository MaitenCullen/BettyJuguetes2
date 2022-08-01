
import React from 'react'
import Item from './Item';
import './components.css';


const ItemList = (props) => {
  return (
    <>
     {props.productos.map((item) => {
        return (
          <div className='card1'>
            <Item 
              key = {item.id} 
              id={item.id} 
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

export default ItemList