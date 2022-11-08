import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
  const {user} = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);
  
    // const navigate = useNavigate();
    // const handleReview = () =>{
    //     if(user?.uid){
    //       return  navigate('/');
    //     }
    //     return navigate('/login')
    // }
    
    return (
      <div>
        {user?.uid ? (
          <Link to='/addReview'>Add Your Valuable Review Here</Link>
        ) : (
          <Link to='/login'>Do you want to review?</Link>
        )}
        <div>
          {
            reviews.map(review => <ReviewCard 
              key={review._id}
              review={review}
            ></ReviewCard>)
          }
        </div>
      </div>
    );
};

export default Review;