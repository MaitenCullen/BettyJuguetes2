

import './components.css';
import {useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { useEffect } from 'react';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


const ItemListContainer = (props) => {
const [listaProductos, setListaProductos] = useState([])
const { category } = useParams();


useEffect(()=> {
    const db = getFirestore();
    const docCategory = category? query(collection(db,'productos'),where("category", "==", category)) 
    : collection(db, 'productos')
    getDocs(docCategory)
    .then((result)=>{
        const listado = result.docs.map((producto)=> {
        return {
            id: producto.id,
            ...producto.data()
        }
    })
setListaProductos(listado)
    })
},[category])
return (  
    <div className='div_app_product'>
        <ItemList productos={listaProductos}/> 
    </div>
    );
}

export default ItemListContainer;