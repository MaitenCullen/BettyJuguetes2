import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import  { getItem } from './mock/Productos';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const { id } = useParams()

  useEffect(()=> {
    getItem(id)
    .then((response) => {
      if (id){
        setProducto(response);
      }else {
        console.log("si no hay stock, hay error")
      }
    })
    .catch((error) => console.log(error));        
  },[id])
  return (
    <div>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer