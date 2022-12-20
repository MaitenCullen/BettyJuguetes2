
import {Route, Routes } from 'react-router-dom';
import './App.css';
import NavBarExample from './components/layouts/NavBar'
import Contact from './components/Contact'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from './components/context/CartContext';
import Checkout from './components/Checkout';
import ItemsCategory from './components/ItemsCategory';
import AlertBetty from './components/context/AlertContext';
import { useContext } from 'react';
import NotAdult from './components/layouts/NotAdult';




function App() {
  const context = useContext(CartContext)
  return (
    <div className='App'>
      <NavBarExample/>
      <AlertBetty/>
      {context.mayor === true  ?
      <section className='center'>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route exact path='/Home' element={<Home/>}/> 
          <Route exact path='/categorias' element={<ItemsCategory/>}/> 
          <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route exact path='/:category' element={<ItemListContainer/>}/> 
          <Route exact path='/Cart' element={<Cart/>}/>
          <Route exact path='/Contact/' element={<Contact/>}/> 
          <Route exact path='/Checkout' element={<Checkout/>}/>
        </Routes>
      </section>
      : context.mayor === false ? <NotAdult/> : null} 
      <div className="card_footer">
      </div>
    </div>
  );
}

export default App;
