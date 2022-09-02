import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import chose from '../imgSRC/chose.jpg';
import './components.css';
import { CartContext } from './context/CartContext';
import { db } from './firestore/Firestore';


const Contact = () =>{
    const navigate = useNavigate()
    const context = useContext(CartContext)
    const[user, setUser] = useState({})
    const [mesaje, setMesaje] =useState('')
    const userProfile = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
            [event.target.direction]: event.target.value,
            [event.target.consulta]:event.target.value,
            [event.target.telefone]: event.target.value,
            [event.target.email]: event.target.value,
        })  
    }
    const contactDates =(event) => {
        event.preventDefault()
        const contactUser = collection(db, "contactoUsuario")
        addDoc(contactUser, {
            user,
            fecha: serverTimestamp()
             })
             .then ((response) => {
                console.log("buenas", response)
                setMesaje(response.id)
                console.log(mesaje,"usuario")
             })
            }


    return (
        <div className='contact_section'>
            <div>
                <h1>
                Hola! Esperamos tu mensajito
                </h1>
            </div>
            <div className='div_contact'>
            <div >
                <img className="chose_img" src={chose} alt=""/>
            </div>
            {!mesaje ?
             <div className='form_div_contact'>   
                <form onSubmit={contactDates} className='form_contact'>
                <input type="text" placeholder='nombre completo' name='name' onChange={userProfile}/>
                <input type="text" placeholder='localidad' name='direction' onChange={userProfile}/>
                <textarea name="consulta" rows="5" cols="28" onChange={userProfile}>Deje su consulta acá</textarea>
                <input type="number" placeholder='telefono' name='telefone' onChange={userProfile}/>
                <input type="email" placeholder='cualestumail@example.com' name='email' onChange={userProfile}/>
                <button type='submit' className='button_user'>Enviar mensaje</button>
                </form> 
             </div> 
             : <div> <h2>Nos contactaremos a la brevedad</h2>
                <p> tu numero de registro es {mesaje}</p>
            </div>}
            <button onClick={()=> navigate('/')} className='button_contact'> volver a inicio</button>
            </div>

        </div>
    )
}

export default Contact