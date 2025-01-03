import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onSearch, onCategoryChange }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);  
  };

  const handleCategoryChange = (e) => {
    onCategoryChange(e.target.value); 
  };

  return (
    <nav className="navbar">
   <Link to="/" className="navbar-logo">
        MyStore
      </Link>
      <div className="navbar-search">
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          onChange={handleSearchChange}  
        />
      </div>

      <div className="navbar-categories">
        <select className="category-select" onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="electronics">electronics</option>
          <option value="jewelery">jewelery</option>
          <option value="women's clothing">womens clothing</option>
          <option value="men's clothing">mens clothing</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
