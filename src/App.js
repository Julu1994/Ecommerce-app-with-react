import React from "react";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product" element={<Product />} />
    <Route path="/cart" element={<Cart />} />

    </Routes>

    </BrowserRouter>
  
    
  );
}

export default App;
