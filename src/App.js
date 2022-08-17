
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



function App() {

  return (
    
    <div className='App'>
    <CartProvider>
      <NavBarExample/>
      <section className='center'>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/> 
          <Route path='/Home' element={<Home/>}/> 
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/:category' element={<ItemListContainer/>}/> 
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/Contact/' element={<Contact/>}/>
          <Route path='*' element ={<ItemListContainer/>}/>
        </Routes>
      </section>
      <div className="card_footer">
      </div>
      </CartProvider> 
    </div>
    
  );
}

export default App;
