import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import MyReviewCard from '../MyReviewCard/MyReviewCard';
import ReviewRow from '../MyReviewCard/ReviewRow';

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


    // // Update Review...............................................>
    // const handleUpdateReview = (event) => {
    //   event.preventDefault();
    //   // const form = event.target;

    //   fetch(`http://localhost:5000/myReview/${review._id}`, {
    //     method: "PUT",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(updateReview),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       if (data.modifiedCount > 0) {
    //         alert("Successfully Modified");
    //       }
    //     });
    // };




    // Delete Review-------------------------------------------------->
    const handleReviewDelete = (id) => {
      fetch(`http://localhost:5000/myReview/${id}`, {
        method: "DElETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remain = reviews.filter((rv) => rv._id !== id);
            setReviews(remain);
            toast.success("Your Review Deleted Successfully!!");
          }
        });
    };


    return (
      <div>
        {reviews.length === 0 ? (
          <p className=" text-2xl font-serif font-semibold">
            No Review Found. Please! Add Review.
          </p>
        ) : (
          <div>
            <h1 className="text-2xl font-serif font-medium">
              Number of Review : {reviews.length}
            </h1>
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>
                      <label></label>
                    </th>
                    <th>Service Details</th>
                    <th>Reviewer Details</th>
                    <th>Review</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review) => (
                    <ReviewRow
                      key={review._id}
                      handleReviewDelete={handleReviewDelete}
                      review={review}
                      // handleUpdateReview={handleUpdateReview}
                    ></ReviewRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {reviews.map((review) => (
          <MyReviewCard
            key={review._id}
            review={review}
            reviews={reviews}
            setReviews={setReviews}
          ></MyReviewCard>
        ))}
      </div>
    );
};

export default MyReview;