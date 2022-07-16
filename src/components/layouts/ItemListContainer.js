

import React, { Fragment } from "react";
import './NavBar.css';


const AddProduct = (props) => {
    console.log(props)
    return (
        <Fragment>
            <p className="Product_add">
            {props.question}
            </p>
            <p className="Product_add2">
             {props.response}
            </p>
        </Fragment>
    );
}

export default AddProduct;