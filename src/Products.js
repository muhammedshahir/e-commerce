import React from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className='ProductsHead'>
      <Link to='/items'>
        <div className="cardone">
          SHOES
        </div>
      </Link>
      <Link to='/itemstwo'>
        <div className="cardsecond">
          PANTS
        </div>
      </Link>
      <Link to='/contact'>
        <div className="cardthird">
          SHIRTS
        </div>
      </Link>
    </div>
  );
}

export default Products;
