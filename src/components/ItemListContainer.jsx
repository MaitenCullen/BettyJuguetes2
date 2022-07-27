

import './components.css';
import {useState} from 'react';
import Productos from './mock/Productos';
import ItemList from './ItemList';
import { useEffect } from 'react';


const ItemListContainer = () => {

const [listaProductos, setListaProductos] = useState([])
const data =  new Promise ((resolve, reject) => {
    
   //que hace la promesa, x fuera setTimeout no es necesario es solo practica para simular lo que el dato tarda
    let condition = true
            setTimeout(() => {
                if (condition){
                    resolve(Productos)
                } else {
                    reject ("algo salio mal")
                }
            },2000 )
          
          })
          useEffect(()=> {
            data
            .then((response) => setListaProductos(response))
            .catch((error) => console.log(error))
},[])

return (
        
        <div className='div_app_product'>
            <ItemList productos={listaProductos}/>  
        </div>
    );

}



export default ItemListContainer;