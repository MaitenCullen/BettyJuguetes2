// import { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { useEffect } from 'react';
// import ItemList from './ItemList';
// import { db } from './firebase/Firebase';
// import { useParams } from 'react-router-dom';
// import { getProducts} from './mock/Productos';
// import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
// import { queryByTestId } from '@testing-library/react';





// const Category = () => {
// const [categorias, setCategorias] = useState([]);
// const { categoryItem } = useParams();

// useEffect(()=> {
//     const db = getFirestore();
//     const docCategory = categoryItem ? query(collection(db,'productos'),where("category", "==", categoryItem)) 
//     : collection(db, 'productos')
//     getDocs(docCategory)
//     .then((result)=>{
//         const listado = result.docs.map((producto)=> {
//         return {
//             id: producto.id,
//             ...producto.data()
//         }
//     })
// setCategorias(listado)
//     })
// },[categoryItem])
// return(
//     <div className='div_app_product'>
//         <ItemList productos={categorias}/> 
//     </div>
// );
// }


// export default Category;