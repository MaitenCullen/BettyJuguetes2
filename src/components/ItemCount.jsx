
import './components.css';
import { ImPlus, ImMinus } from "react-icons/im";
import Button from 'react-bootstrap/Button';



const ItemCount = (props) => {
    const addProduct =() => {
        if (props.counter <= props.stock){
            props.setCounter(props.counter + 1) 
        }
    }
    const substract = () => {
        if (props.counter > 0){ 
            props.setCounter(props.counter - 1)
        }      
    }
return (
    <>
    <div className='cart_date'>
        <div className='botons_cards'>
        <ImMinus className='btn_style' onClick={substract}/>
        <p>{props.counter} </p>
        <ImPlus className='btn_style' onClick={addProduct}/>
        </div>
    </div>
        {props.counter >0 ?
        <Button id='button_product' onClick={()=> props.onAdd(props.counter)}>Agregar al carrito </Button> : null}
    </>
    )
}

export default ItemCount;

