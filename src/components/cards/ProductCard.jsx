// src/components/cards/ProductCard.jsx
import React from 'react';

const ProductCard = ({ productName, price, description }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2 style={{ margin: '0 0 8px' }}>{productName}</h2>
      <p style={{ margin: '0 0 8px' }}>Price: ${price}</p>
      <p style={{ margin: '0' }}>{description}</p>
    </div>
  );
};

export default ProductCard;
