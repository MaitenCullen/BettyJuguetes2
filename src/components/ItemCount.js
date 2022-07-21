
import {useState} from 'react';
import './components.css';
import Cart from './layouts/CartWidget';
import { GrFormSubtract, GrFormAdd} from "react-icons/gr";

function ItemCount  ()  {  

    let today = new Date();
    const [counter, setcounter] = useState(0);
    const [dateAndTime, setdateAndTime] = useState("");
    const [stock, setstock] = useState(10);
    const [initial, setinitial] = useState(1);

    const onAdd = () =>{
        setinitial(initial + 1);
        setstock(stock - 1);
        setdateAndTime(today.toLocaleString());
        console.log(stock)
        if (initial <= 10){
            setcounter(counter + 1);
        } else { 
            alert("no podes seguir comprando");
        }
    }

    
    const substract = () => {
        setinitial(initial - 1);
        setstock(stock + 1);
        setcounter(counter -1);
        setdateAndTime(today.toLocaleString());
        if (counter == 0){
            alert("no hay más")
            setcounter(counter === 0);
            setinitial(initial ===0)
        };
    }
    return (
        <div className='cart_date'>
            <Cart/>
            {counter}
            <div>
            <button onClick={substract} >< GrFormSubtract className='btn_substract'/></button>
            <button onClick={onAdd} ><GrFormAdd className='btn-add'/></button>
            </div>
            <p id='P_date'> fecha y hs del click: {dateAndTime} </p>
        </div>
    );
}



export default ItemCount 

