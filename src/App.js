
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Products from "./components/Products";
import NavBarExample from './components/layouts/NavBar'
import Contact from './components/Contact'
import ItemListContainer from './components/ItemListContainer';



function App() {

// const imagenP = require(`./img/${productos[1].imagen}`);
  return (
    <div className='App'>

    <BrowserRouter>
    {/* <img src={imagenP}/>  */}
    <NavBarExample/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
        <Route path='Products' element={<Products/>}/>
        <Route path='Contact' element={<Contact/>}/> 
    </Routes>
    <ItemListContainer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
