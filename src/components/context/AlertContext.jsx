import React, { useContext, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';
import '../layouts/NavBar.css'



const AlertBetty = () => {
  const context = useContext(CartContext)
  const onAdultClick = (param) =>{
  setShow(false)
  context.edadAdulta(param)
  }
  
const [show, setShow] = useState(true);
  
    return (
      <div>
        <div  className='alert_div'>
        <Alert show={show} id='alert_style'>
          <Alert.Heading> Buenas Buenas!</Alert.Heading>
          <p>
           Betty es un espacio para personas mayores de 18 años,<br/> así que si tenes edad para adquirir creditos, <br/>deudas con tarjetas y responsabilidades legales, <strong>sos bienvenide!</strong>  <br/>de lo contrario, nos vemos en unos años, no te apures en crecer
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => onAdultClick(true) } id='adult'>
              SI! tengo + 18
            </Button>
            <Button onClick={() =>  onAdultClick(false) }id='not_adult' >
            no, soy menor
            </Button>
          </div>
        </Alert>
        </div>
      </div>
    );

}

export default AlertBetty;