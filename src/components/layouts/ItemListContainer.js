

import './NavBar.css';


const AddProduct = (props) => {
    console.log(props)
    return (
        <div className='item_cart'>
            <p id="Product_add">
            {props.question} {props.response}
            </p>

        </div>
    );
}

export default AddProduct;