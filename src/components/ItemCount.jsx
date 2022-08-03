
import {useState} from 'react';
import './components.css';
import Cart from './layouts/CartWidget';
import { ImPlus, ImMinus } from "react-icons/im";
import Button from 'react-bootstrap/Button';



const ItemCount = (props) => {
    const [counter, setCounter] = useState(props.initial)
    let today = new Date();

    const [DateAndTime, setDateAndTime] = useState("");
    
    const addProduct =() => {
        setDateAndTime(today.toLocaleString());
        if (counter < props.stock){
            setCounter(counter + 1)
        }
    }
    const substract = () => {
        setDateAndTime(today.toLocaleString());
        if (counter > 0){
            
            setCounter(counter - 1)
        }
        
    }
   
    return (
        <>
        <div className='cart_date'>
            <div className='botons_cards'>
            <ImMinus className='btn_style' onClick={substract}/>
            <Cart/>
            <ImPlus className='btn_style' onClick={addProduct}/>
            </div>
            <p>{counter} </p>
            <p>fecha y hs del click: {DateAndTime} </p>
        </div>
       {/* uso Funcion Anonima para que no se me ejecute automaticamente el counter porque eso hace react y asi escribo menos */}
       <Button id='button_product' onClick={()=> props.onAdd(counter)}>Agregar al carrito </Button>
        </>
        
       
    )
    
}


export default ItemCount;

