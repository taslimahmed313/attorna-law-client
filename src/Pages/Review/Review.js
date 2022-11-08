import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
  const {user} = useContext(AuthContext);

  
    const navigate = useNavigate();
    const handleReview = () =>{
        if(user?.uid){
          return  navigate('/');
        }
        return navigate('/login')
    }
    
    return (
      <div>
        {user?.uid ? (
          <Link to='/addReview'>Add Your Valuable Review Here</Link>
        ) : (
          <Link to='/login'>Do you want to review?</Link>
        )}
        <div>
          <ReviewCard></ReviewCard>
        </div>
      </div>
    );
};

export default Review;