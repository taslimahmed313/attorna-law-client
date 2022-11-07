import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import "react-photo-view/dist/react-photo-view.css";
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({service}) => {
    const {img, serviceName, price, description} = service;
    return (
      <div className="serviceCard">
        <PhotoProvider>
          <PhotoView src={img}>
            <img className="w-full h-[200px] rounded-lg	" src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
        <p className="text-xl font-semibold">{serviceName}</p>
        <p className="text-[tomato]">Price: ${price}</p>
        <p>{description.slice(0, 100)}....</p>
        <Link className="px-16 py-2 rounded-lg mt-5 inline-block text-white bg-slate-700">
          See All
        </Link>
      </div>
    );
};

export default ServiceCard;