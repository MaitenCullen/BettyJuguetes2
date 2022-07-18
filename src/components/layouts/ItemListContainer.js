

import React, { Fragment } from "react";
import './NavBar.css';


const AddProduct = (props) => {
    console.log(props)
    return (
        <div>
            <p className="Product_add">
            {props.question} {props.response}
            </p>

        </div>
    );
}

export default AddProduct;