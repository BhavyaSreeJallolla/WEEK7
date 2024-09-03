import React from 'react';
import Order from './Order';

const OrderList = ({ orders }) => {
  return (
    <div>
      <h1>Order List</h1>
      {orders.map(order => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;
