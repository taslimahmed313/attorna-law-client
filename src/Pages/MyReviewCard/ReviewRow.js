import React from 'react';

const ReviewRow = ({ review, handleReviewDelete, handleUpdateReview }) => {
  const { name, serviceImg, comment,img, price,email, _id, serviceName } = review;
  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleReviewDelete(_id)}
            className="btn btn-circle btn-outline w-10 h-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" rounded-xl w-16 h-16">
              {serviceImg && (
                <img src={serviceImg} alt="Avatar Tailwind CSS Component" />
              )}
            </div>
          </div>
          <div>
            <div>
              <p className="font-semibold">{serviceName}</p>
              <p className="text-[tomato] font-serif font-medium">
                Price: ${price}
              </p>
            </div>
            <div className="text-sm opacity-50"></div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" rounded-xl w-16 h-16">
              {serviceImg && (
                <img src={img} alt="Avatar Tailwind CSS Component" />
              )}
            </div>
          </div>
          <div>
            <div>
              <p className="font-semibold">{name}</p>
              <p className="font-serif font-medium">{email}</p>
            </div>
            <div className="text-sm opacity-50"></div>
          </div>
        </div>
      </td>
      <td>
        <div className="w-[150px]">{comment.slice(0, 30)}....</div>
      </td>
      <th>
        {/* <button
          onClick={() => handleUpdateReview(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "Pending"}
        </button> */}
      </th>
    </tr>
    
  );
};

export default ReviewRow;