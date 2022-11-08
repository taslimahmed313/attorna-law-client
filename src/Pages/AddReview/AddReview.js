import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const AddReview = () => {
    const {user} = useContext(AuthContext);
    const service = useLoaderData();
    const { price, serviceName } = service;
    console.log(service)
    
    const handleReviewPost = event =>{
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;

        const reviewAdd = {
          name: user?.displayName,
          email: user?.email,
          comment: review,
          img: user?.photoURL,
          serviceName,
          price
        };

        fetch("http://localhost:5000/review",{
            method: "POST",
            headers :{
                "content-type" : "application/json"
            },
            body : JSON.stringify(reviewAdd)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
      <div>
        <div className=" bg-teal-900 w-1/2 mx-auto mb-10 p-5">
          <form onSubmit={handleReviewPost}>
            <label
              className="text-2xl text-white font-serif font-semibold my-3 inline-block"
              htmlFor="review"
            >
              Add Your Review
            </label>{" "}
            <br />
            <textarea
              className="w-full rounded-lg"
              name="review"
              id="review"
              cols="30"
              rows="4"
            ></textarea>
            <div>
              <button className="btn my-3" type="submit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddReview;