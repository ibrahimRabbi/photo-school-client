import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'



const StarRating = ({rating}) => {
    return (
        <Rating style={{ maxWidth: 120 }} value={rating} />
    );
};

export default StarRating;