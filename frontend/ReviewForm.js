// src/components/ReviewForm.js
import React from 'react';
import './ReviewForm.css';

const ReviewForm = () => {
    return (
        <div className="review-form">
            <h2>Add a Review</h2>
            <form>
                <textarea placeholder="Write your review here..." rows="5"></textarea>
                <br />
                <button type="submit" className="submit-review-button">Submit Review</button>
            </form>
        </div>
    );
};

export default ReviewForm;
