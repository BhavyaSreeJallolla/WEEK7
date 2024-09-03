// src/components/cards/CourseCard.jsx
import React from 'react';

const CourseCard = ({ courseName, instructor, duration }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ margin: '0 0 8px' }}>{courseName}</h3>
      <p style={{ margin: '0 0 8px' }}>Instructor: {instructor}</p>
      <p style={{ margin: '0' }}>Duration: {duration}</p>
    </div>
  );
};

export default CourseCard;
