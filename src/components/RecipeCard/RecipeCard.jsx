import PropTypes from 'prop-types';
import React from 'react';
import styles from './RecipeCard.module.css';

const RecipeCard = ({ recipeName, ingredients, cookingTime }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.recipeName}>{recipeName}</h2>
      <p className={styles.ingredients}>Ingredients: {ingredients.join(', ')}</p>
      <p className={styles.cookingTime}>Cooking Time: {cookingTime} minutes</p>
    </div>
  );
};

RecipeCard.propTypes = {
  recipeName: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  cookingTime: PropTypes.number.isRequired
};

export default RecipeCard;
