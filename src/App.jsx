import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Navbar } from './Components/Navbar';
import Shop from "/src/Pages/shop/Shop.jsx";
import Wishlist from "/src/Pages/addcart/Wishlist.jsx";


function App() {
  

  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Wishlist/>}/>
      </Routes>
     </Router>
        
    </>
  )
}

export default App
