import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const ServiceDetails = ({user}) => {
    const service = useLoaderData();
    const {serviceName, description} = service
    return (
      <div className="grid grid-cols-2">
        <div>
          <p>{serviceName}</p>
          <p>{description}</p>
        </div>
        <div>
          <Review></Review>
        </div>
      </div>
    );
};

export default ServiceDetails;