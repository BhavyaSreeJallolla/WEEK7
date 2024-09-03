// src/components/cards/RecipeCard.jsx
import React from 'react';

const RecipeCard = ({ recipeName, ingredients, cookingTime }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ margin: '0 0 8px' }}>{recipeName}</h3>
      <p style={{ margin: '0 0 8px' }}>Ingredients: {ingredients.join(', ')}</p>
      <p style={{ margin: '0' }}>Cooking Time: {cookingTime}</p>
    </div>
  );
};

export default RecipeCard;
