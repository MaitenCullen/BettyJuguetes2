import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getProducts} from './mock/Productos';





const Category = () => {
const [categorias, setCategorias] = useState([]);
const { categoryItem } = useParams();
useEffect(()=> {
    getProducts
        .then((response) => {
            if (categoryItem) {
                setCategorias(response.find((producto) => producto.category === categoryItem)
                );
            } else {
                setCategorias(response)
            }
        })
        .catch (( error) => console.log("Tuvimos un problemilla", error));
    },[categoryItem])
    return(
        <div className='div_app_product'>
            <ItemList productos={categorias}/> 
        </div>
    );
}

export default Category;