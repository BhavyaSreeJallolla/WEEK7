import PropTypes from 'prop-types';
import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ productName, price, description }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.productName}>{productName}</h2>
      <p className={styles.price}>${price}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string
};

export default ProductCard;
