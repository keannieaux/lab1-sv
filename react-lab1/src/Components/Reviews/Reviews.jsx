import React from 'react';
import './Reviews.css'; // Optional: Create a CSS file for styling

const Reviews = () => {
  return (
    <div className="reviews">
      <h1>User Reviews</h1>
      <p>Here's what our users have to say:</p>
      <ul>
        <li>"This is the best platform for learning!" - User A</li>
        <li>"I found exactly what I needed." - User B</li>
        <li>"Highly recommend the courses offered here." - User C</li>
      </ul>
    </div>
  );
};

export default Reviews;
