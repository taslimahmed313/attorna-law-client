import React, { useState } from 'react';

const MyReviewCard = ({review}) => {
    const { name, img, comment, _id, serviceName } = review;

    const [updateReview, setUpdateReview] = useState(review);

    // Handle Update Review
    const handleUpdateReview = (event) =>{
      event.preventDefault();

      fetch(`http://localhost:5000/myReview/${review._id}`, {
        method: "PUT",
        headers:{
          "content-type" : "application/json"
        },
        body : JSON.stringify(updateReview)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }

    const handleInputChange = (event) => {
      const field = event.target.name;
      const value = event.target.value;
      const newUser = { ...updateReview };
      newUser[field] = value;
      setUpdateReview(newUser);
    };




    const handleReviewDelete = (id) =>{
        fetch(`http://localhost:5000/myReview/${id}`,{
            method: "DElETE",
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }

    return (
      <div>
        <div className="flex border border-gray-700 my-3">
          <div>
            <img className=" w-16" src={img} alt="" />
          </div>
          <div>
            <p className="">{name}</p>
            <p className="text-xl">{serviceName}</p>
            <p>{comment}</p>
            <button onClick={() => handleReviewDelete(_id)} className="btn">
              Delete
            </button>
            
            {/* Update User....................................> */}
            <div>
              {/* The button to open modal */}
              <label htmlFor="my-modal-3" className="btn">
                Update
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <label htmlFor="name">Name</label>
                  <br />
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="name"
                    id=""
                  />
                  <br />
                  <label htmlFor="review">Edit Review</label> <br />
                  <textarea
                    onChange={handleInputChange}
                    name="comment"
                    id="review"
                    cols="30"
                    rows="4"
                  ></textarea>{" "}
                  <br />
                  <button className="btn" onClick={handleUpdateReview}>
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyReviewCard;