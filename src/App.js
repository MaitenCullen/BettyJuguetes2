
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Products from "./components/Products";
import NavBarExample from './components/layouts/NavBar'
import Contact from './components/Contact'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import "bootstrap/dist/css/bootstrap.min.css";




function App() {
  return (
    <div className='App'>
      <NavBarExample/>
      <section className='center'>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/> 
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/> 
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/Contact/' element={<Contact/>}/>
          <Route path='*' element ={<ItemListContainer/>}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
