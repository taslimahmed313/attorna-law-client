import React from 'react';

const ServiceCard = ({service}) => {
    const {img, serviceName, price, description} = service;
    return (
      <div>
        <img className="w-full h-[200px]" src={img} alt="" />
        <p className="text-xl">{serviceName}</p>
        <p>{price}</p>
        <p>{description.slice(0, 100)}....</p>
      </div>
    );
};

export default ServiceCard;