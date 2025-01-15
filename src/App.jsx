// import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import NavBar from "./NavBar";
import Siadbar from "./Siadbar";
import Products from "./Pages/Products";
import AddProduct from "./Pages/AddProduct";
import ProductDetailes from "./Pages/ProductDetailes";

const App = () => {
  return (
    <BrowserRouter> 
    <div className="app">
      <NavBar />
      <div className="row">
        <div className="col-2 sidebar ">
          <Siadbar />
        </div>
        <div className="col-10">
        <Routes >
        <Route  path="/" element={<HomePage/>} />
        <Route path="products" element={<Products/>} />
        <Route path="products/add" element={<AddProduct/>} />
        <Route path="products/:productID" element={<ProductDetailes/>} />

        </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
