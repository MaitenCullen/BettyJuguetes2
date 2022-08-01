

import './components.css';
import {useState} from 'react';
import { useParams } from 'react-router-dom';
import { getProducts} from './mock/Productos';
import ItemList from './ItemList';
import { useEffect } from 'react';


const ItemListContainer = () => {

const [listaProductos, setListaProductos] = useState([])
const { category } = useParams();
console.log("holi", category);
useEffect(()=> {
    getProducts
        .then((response) => {
            console.log("lallala", response)
            if (category) {
                setListaProductos(response.find((producto) => producto.id === category)
                );
            } else {
                setListaProductos(response)
            }
        })
        .catch (( error) => console.log("Tuvimos un problemilla", error));
    },[category])

return (
        
        <div className='div_app_product'>
            <ItemList productos={listaProductos}/>  
        </div>
    );

}



export default ItemListContainer;