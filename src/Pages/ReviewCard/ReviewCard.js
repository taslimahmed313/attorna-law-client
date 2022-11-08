import React from 'react';

const ReviewCard = ({review}) => {
    const {name, img, comment} = review;

    return (
        <div className='flex border border-gray-700 my-3'>
            <div>
                <img className=' w-16' src={img} alt="" />
            </div>
            <div>
                <p className=''>{name}</p>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default ReviewCard;