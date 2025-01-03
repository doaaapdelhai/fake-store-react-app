import { useParams } from "react-router-dom";
import Data from "../Date";

import './ProductDetails.css'
const ProductDetails = () => {
  const { id } = useParams(); 
  const product = Data.find((p) => p.id === parseInt(id)); 

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <span>Price: ${product.price}</span>
    </div>
  );
};

export default ProductDetails;
