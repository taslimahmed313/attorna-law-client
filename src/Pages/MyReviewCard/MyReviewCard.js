import React from 'react';

const MyReviewCard = ({review}) => {
    const { name, img, comment, _id, serviceName } = review;

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
            <p className='text-xl'>{serviceName}</p>
            <p>{comment}</p>
            <button onClick={() => handleReviewDelete(_id)} className="btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
};

export default MyReviewCard;