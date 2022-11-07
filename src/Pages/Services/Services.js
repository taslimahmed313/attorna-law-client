import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Home/ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData();
    return (
      <div className="grid grid-cols-3 gap-6 my-12">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    );
};

export default Services;