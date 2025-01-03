import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // استيراد Link من react-router-dom
import Data from '../Date'; 
import './ProductsListe.css'
const ProductsListe = ({ searchTerm, selectedCategory }) => {
  const [filteredProducts, setFilteredProducts] = useState(Data);

  const filterProducts = (term, category) => {
    let filtered = Data.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase()) ||
      product.description.toLowerCase().includes(term.toLowerCase())
    );

    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    setFilteredProducts(filtered);
  };

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
              <Link to={`/product/${product.id}`}>
                <button className="view-btn">View Details</button>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ProductsListe;
