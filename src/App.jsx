import { useState } from 'react';
import './App.css';
import ProductsListe from './comp/productsListe/ProductsListe';
import Navbar from './comp/navbar/Navbar';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="App">
      <Navbar  onSearch={setSearchTerm}  onCategoryChange={setSelectedCategory}  />
      <h1 className='title_'>Enjoy shopping!</h1>
      <ProductsListe  searchTerm={searchTerm}   selectedCategory={selectedCategory}    />
    </div>
  );
};

export default App;
