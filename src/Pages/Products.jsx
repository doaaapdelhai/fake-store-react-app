// import React from 'react';
import './Products.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {

  const [products, setProducts] = useState([])


  useEffect(() => {
    fetch('http://localhost:5000/products')
    .then((res)=>res.json() )
    .then((data)=>{
      setProducts(data);
    })
    
   
  }, [])


  return (
    <>
    <h2 className=""> Products page</h2>
    <Link to={'/products/add'} className="btn btn-success btn-sm mt-3 " >Add New Product</Link>

    <table className="table table-striped mt-5  products-table ">

    <thead>
     <tr>
     <th>ID</th>
      <th>Title</th>
      <th>description</th>
      <th>Price</th>
      <th>Operations</th>
     </tr>
    </thead>
    <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description.slice(0 , 20)}.....</td>
              <td>${product.price}</td>
              <td>
                <button className="btn btn-danger btn-sm m-1">Delete</button>
                <Link to={`/products/${product.id}`} className="btn btn-info btn-sm m-1"  >View</Link>
                <button className="btn btn-primary btn-sm m-1">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>

   </table>


    </>
  );
}

export default Products;
