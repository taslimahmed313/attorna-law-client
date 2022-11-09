import React from 'react';

const UpdateReview = ({ handleUpdateReview, handleInputChange }) => {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <br />
      <input onChange={handleInputChange} type="text" name="name" id="" />
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
  );
};

export default UpdateReview;