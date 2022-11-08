import React from 'react';
import { useNavigate } from 'react-router-dom';

const Review = ({user}) => {
    const navigate = useNavigate();
    const handleReview = () =>{
        if(user?.uid){
            navigate('/home')
        }
        return navigate('/services')
    }
    return (
      <div>
        <button onClick={handleReview}>Add Review</button>
      </div>
    );
};

export default Review;