import React, { useContext, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';


const AlertBetty = () => {
  const context = useContext(CartContext)
  const onAdultClick = (param) =>{
  setShow(false)
  context.edadAdulta(param)
  }

  
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading> Buenas Buenas!</Alert.Heading>
          <p>
           Betty es un espacio para personas mayores de 18 años, así que si tenes edad para adquirir creditos, deudas con tarjetas y responsabilidades legales, sos bienvenide! de lo contrario, nos vemos en unos años, no te apures en crecer
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => onAdultClick(true) } variant="outline-success" >
              SI! tengo + 18
            </Button>
            <Button onClick={() =>  onAdultClick(false) }variant="outline-success" >
            no, soy menor
            </Button>
          </div>
        </Alert>
      </>
    );

}

export default AlertBetty;