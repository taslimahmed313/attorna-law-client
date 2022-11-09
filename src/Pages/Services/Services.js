import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import ServiceCard from '../Home/ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData();
    useTitle("Services")

    return (
      <div className="grid grid-cols-3 gap-6 my-12">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    );
};

export default Services;