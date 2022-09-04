
import './components.css';
import {useState} from 'react';
import { useEffect } from 'react';
import { collection, getDocs,} from "firebase/firestore";
import { db } from './firestore/Firestore';
import './styleItem.css';
import ImageCategory from './ImageCategory';




const ItemsCategory = () => {
const [listaImagenes, setListaImagenes] = useState([])

useEffect(()=> {
    const docCategory = collection(db,'categorias')
    getDocs(docCategory)
    .then((snapshot)=>{
        setListaImagenes(snapshot.docs.map((producto) => ({
            category: producto.category,
            imagen: producto.imagen,
            ...producto.data()
        })))
    })
},[])

return (
    <div className='div_category_imagen'>
        <ImageCategory category={listaImagenes}/>
    </div>
)
}

export default ItemsCategory;