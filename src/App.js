
import {Route, Routes } from 'react-router-dom';
import './App.css';
import NavBarExample from './components/layouts/NavBar'
import Contact from './components/Contact'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import CartProvider from './components/context/CartContext';
import Checkout from './components/Checkout';
import SweetAlert from 'react-bootstrap-sweetalert';
import ItemsCategory from './components/ItemsCategory';




function App() {

  return (
    
    <div className='App'>
        {/* <SweetAlert/> */}
    <CartProvider>
      <NavBarExample/>
      <section className='center'>
        <Routes>
          <Route path='/' element={<ItemsCategory/>}/> 
          <Route path='/Home' element={<Home/>}/> 
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/:category' element={<ItemListContainer/>}/> 
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Contact/' element={<Contact/>}/>
          <Route path='*' element ={<ItemListContainer/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
        </Routes>
      </section>
      <div className="card_footer">
      </div>
      </CartProvider> 
    </div>
    
  );
}

export default App;
