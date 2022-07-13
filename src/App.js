
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Products from "./components/Products";
import NavBarExample from './components/layouts/NavBar'
import Contact from './components/Contact'


function App() {
  return (
    <div className='App'>
   
    <BrowserRouter>
    <NavBarExample/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
        <Route path='Products' element={<Products/>}/>
        <Route path='Contact' element={<Contact/>}/> 
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
