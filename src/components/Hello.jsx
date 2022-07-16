import React, { Fragment } from "react";

const Hello = (props) => {
    console.log(props)
    return (
        <Fragment>
            <h2>
                Hola gente {props.people}
            </h2>
            <h3>
                tu edad es {props.edad}
            </h3>
        </Fragment>
    );
}

export default Hello;