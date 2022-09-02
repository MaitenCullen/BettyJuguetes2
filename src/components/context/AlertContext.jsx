import React, { useContext, useState } from 'react';
import { createContext } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';


const AlertBetty = () => {
  const context = useContext(CartContext)
  const onAdultClick = (param) =>{
  setShow(false)
  context.edadAdulta(param)
  }

  const onNotAdult = (param) => {
    AlertDis()
    onAdultClick(param)
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
            <Button onClick={() => onNotAdult(false)}variant="outline-success" >
            no, soy menor
            </Button>
          </div>
        </Alert>
      </>
    );

}
const AlertDis = () => {
    return (
      <Alert>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }




export default AlertBetty;