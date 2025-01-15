// import React from 'react';

import { Link } from "react-router-dom";

const Siadbar = () => {
  return (
    <>
    <ul className="list-unstyled ">
        <li >
            <Link to={'/products'}>Get All Products </Link>
        </li>
        <li>
            <Link >Get All Categorys </Link>

        </li>
    </ul>
      
    </>
  );
}

export default Siadbar;
