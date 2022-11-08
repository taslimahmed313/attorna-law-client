import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

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
        <button onClick={handleReview}>Add Review</button>
      </div>
    );
};

export default Review;