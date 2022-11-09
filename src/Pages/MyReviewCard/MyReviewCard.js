import React from 'react';

const MyReviewCard = ({review, reviews, setReviews}) => {
    // const { name, serviceImg, comment, _id, serviceName } = review;
    // console.log(_id)

    // const [updateReview, setUpdateReview] = useState(review);

    // Handle Update Review
    // const handleUpdateReview = (event) =>{
    //   event.preventDefault();
    //   // const form = event.target;

    //   fetch(`http://localhost:5000/myReview/${review._id}`, {
    //     method: "PUT",
    //     headers:{
    //       "content-type" : "application/json"
    //     },
    //     body : JSON.stringify(updateReview)
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       if(data.modifiedCount > 0){
    //         alert("Successfully Modified")
    //       }

    //     });
    // }

    // const handleInputChange = (event) => {
    //   const field = event.target.name;
    //   const value = event.target.value;
    //   const newUser = { ...updateReview };
    //   newUser[field] = value;
    //   setUpdateReview(newUser);
    // };



    // const handleReviewDelete = (id) =>{
    //     fetch(`http://localhost:5000/myReview/${id}`,{
    //         method: "DElETE",
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data)
    //         if(data.deletedCount > 0){
    //           const remain = reviews.filter(rv => rv._id !== id);
    //           setReviews(remain);
    //           toast.success("Your Review Successfully Deleted!!")
    //         }
    //     })
    // }

    return (
      <div>
        
        
      </div>
    );
};

export default MyReviewCard;