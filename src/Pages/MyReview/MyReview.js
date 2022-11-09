import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import MyReviewCard from '../MyReviewCard/MyReviewCard';

const MyReview = () => {
    const {user, logout} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useTitle("My Review")
    
    useEffect(()=>{
        fetch(`http://localhost:5000/myReview?email=${user?.email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("attorney-token")}`,
          },
        })
          .then((res) => {
            if (res.status === 401 || res.status === 403) {
              logout();
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setReviews(data);
          });
    },[logout, user?.email])


    return (
        <div>
            {
                reviews.length === 0 ? <p className=' text-2xl font-serif font-semibold'>No Review</p> : <></>
            }
            
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