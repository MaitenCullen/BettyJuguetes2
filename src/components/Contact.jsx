import chose from '../imgSRC/chose.jpg';
import './components.css';


const Contact = () =>{
    return (
        <div className='contact_section'>
            <h1>
            Contactate
            </h1>
            <div>
                <img className="chose_img" src={chose} alt=""/>
            </div>
        </div>
    )
}

export default Contact