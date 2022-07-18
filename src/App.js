
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Products from "./components/Products";
import NavBarExample from './components/layouts/NavBar'
import Contact from './components/Contact'
import TestOne from './components/TestOne';
import Hello from './components/Hello';

function App() {
  return (
    <div className='App'>
   
    <BrowserRouter>
    <TestOne/>
    <NavBarExample/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
        <Route path='Products' element={<Products/>}/>
        <Route path='Contact' element={<Contact/>}/> 
    </Routes>
      <Hello people="linda" age={28}/>
      <Hello people="fea" age="15"/>
    </BrowserRouter>
    </div>
  );
}

export default App;
