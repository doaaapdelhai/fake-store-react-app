import './ProductsListe.css';
import { useState, useEffect } from 'react';
import Data from '../Date'; 

const ProductsListe = ({ searchTerm, selectedCategory }) => {
  const [filteredProducts, setFilteredProducts] = useState(Data);
// filterProducts
  const filterProducts = (term, category) => {
    let filtered = Data.filter((product) => 
      product.title.toLowerCase().includes(term.toLowerCase()) || 
      product.description.toLowerCase().includes(term.toLowerCase())
    );

// filter chose
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    setFilteredProducts(filtered);
  };

// when text change
  useEffect(() => {
    filterProducts(searchTerm, selectedCategory);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="cards">
      {
        filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <img className="card-image" src={product.image} alt={product.title} />
            <h3 className="card-title">{product.title.slice(0, 15)}</h3>
            <p className="card-description">{product.description.split(' ').slice(0, 6).join(' ')}...</p>   
            <span className="card-price">Price: ${product.price}</span>
            <div className="btns">
              <button className="view-btn">View Details</button>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ProductsListe;
