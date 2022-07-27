
import React from 'react'
import Item from './Item';



const ItemList = (props) => {
    console.log(props)
  return (
    <>
    {props.productos.map(((item) => (
        <Item titulo={item.Producto} imagen={item.imagen} key = {item.id}/>
    )))}
    
    </>
  )
}

export default ItemList