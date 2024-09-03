// src/components/cards/NewsCard.jsx
import React from 'react';

const NewsCard = ({ headline, summary, source }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ margin: '0 0 8px' }}>{headline}</h3>
      <p style={{ margin: '0 0 8px' }}>{summary}</p>
      <p style={{ margin: '0', fontStyle: 'italic' }}>Source: {source}</p>
    </div>
  );
};

export default NewsCard;
