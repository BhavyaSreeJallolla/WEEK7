import React from 'react';

const Order = ({ order }) => {
  return (
    <div>
      <h4>Product: {order.productName}</h4>
      <p>Quantity: {order.quantity}</p>
    </div>
  );
};

export default Order;
