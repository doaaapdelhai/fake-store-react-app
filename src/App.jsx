import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetails from "./comp/ProductDetails/ProductDetails";
import ProductsListe from "./comp/productsListe/ProductsListe";
import Navbar from "./comp/navbar/Navbar";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Router>
      <div className="App">
        <Navbar
          onSearch={setSearchTerm}
          onCategoryChange={setSelectedCategory}
        />
        <h1 className="title_">Enjoy shopping!</h1>

        <Routes>
          <Route
            path="/"
            element={
              <ProductsListe
                searchTerm={searchTerm}
                selectedCategory={selectedCategory}
              />
            }
          />
          <Route path="/product/:id" element={<ProductDetails />} />{" "}
          {/* صفحة تفاصيل المنتج */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
