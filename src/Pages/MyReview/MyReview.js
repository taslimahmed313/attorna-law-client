import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import MyReviewCard from '../MyReviewCard/MyReviewCard';

const MyReview = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/myReview?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReviews(data)
        })
    },[user?.email])

    return (
        <div>
            {
                reviews.map(review =><MyReviewCard
                key={review._id}
                review={review}
                ></MyReviewCard>)
            }
        </div>
    );
};

export default MyReview;