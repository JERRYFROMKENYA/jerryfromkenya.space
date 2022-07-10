import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
//import Editcard from './components/Cards/CardItem/Editcard';
import { BrowserRouter as Router, Route, Routes ,Link } from 'react-router-dom'
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Portfolio from './pages/Portfolio/Portfolio';
//<Route path="/card/edit"  element={<Editcard />}/>
function App() {
  return (
    <>
     
    <Router>
     <Navbar />
     <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/portfolio"  element={<Portfolio/>}/>
      <Route path="/shop"  element={<Shop />}/>
      
     </Routes>
    </Router>
 
    </>
   
    
  );
}

export default App;
