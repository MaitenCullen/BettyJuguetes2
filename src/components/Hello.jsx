import React, { Fragment } from "react";


//aca recibo props opciones desestructurarla como se ve, o pasar props y llamarlas props.people//

const Hello = ({people, age}) => {
    
    return (
        <Fragment>
            <h2>
                Hola gente {people} tu edad es {age}
            </h2>
        </Fragment>
    );
}

export default Hello;