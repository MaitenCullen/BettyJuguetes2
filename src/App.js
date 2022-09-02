
import {Route, Routes } from 'react-router-dom';
import './App.css';
import NavBarExample from './components/layouts/NavBar'
import Contact from './components/Contact'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import CartProvider, { CartContext } from './components/context/CartContext';
import Checkout from './components/Checkout';
import ItemsCategory from './components/ItemsCategory';
import AlertBetty from './components/context/AlertContext';
import { useContext } from 'react';




function App() {
  const context = useContext(CartContext)
  console.log(context, "el mayor")
  return (
    
    <div className='App'>
   
      <AlertBetty/>
      <NavBarExample/>
      hggyyt
      {context.mayor ?
      <section className='center'>
        <Routes>
          <Route path='/Home' element={<Home/>}/> 
          <Route path='/categorias' element={<ItemsCategory/>}/> 
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/:category' element={<ItemListContainer/>}/> 
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Contact/' element={<Contact/>}/>
          <Route path='*' element ={<ItemListContainer/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
        </Routes>
      </section>
      : null}
      <div className="card_footer">
      </div>
    </div>
    
  );
}

export default App;
