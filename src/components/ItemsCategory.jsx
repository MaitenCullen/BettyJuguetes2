
import './components.css';
import {useState} from 'react';
import { useEffect } from 'react';
import { collection, getDocs,} from "firebase/firestore";
import ImagenCategory from './ImagenCategory';
import { db } from './firestore/Firestore';
import './styleItem.css';




const ItemsCategory = () => {
const [listaImagenes, setListaImagenes] = useState([])

// const { category } = useParams();

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
 console.log(listaImagenes, "otras otras")
},[])


    return (
        <div className='div_category_imagen'>
            <ImagenCategory category={listaImagenes}/>
        </div>
    )


}

export default ItemsCategory;