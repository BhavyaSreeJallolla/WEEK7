import React from 'react';

const Article = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
