import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { SpinnerRoundOutlined} from 'spinners-react';
import './styleItem.css';
import { doc, getDoc, getFirestore } from 'firebase/firestore';



const ItemDetailContainer = () => {
	const {id} = useParams ()
	const [producto, setProducto] = useState()
	useEffect(()=> {
	  const db = getFirestore();
	  const docRef = doc(db, 'productos', id) 
	getDoc(docRef)
	.then((snapshot) => {
	  if (snapshot.exists()) { 
		const data = {
		  id: snapshot.id,
		  ...snapshot.data()
		}
		setProducto(data)
	  }
	})
	.catch((error)=> console.error(error))
	}, [id])
  return (
    producto ? <ItemDetail producto={producto}/> : < SpinnerRoundOutlined size='100px' color='#8963c6' height='100%'/>
  )
}


export default ItemDetailContainer


