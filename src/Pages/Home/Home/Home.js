import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import Slider from '../Slider/Slider';

const Home = () => {
    const services = useLoaderData();
    console.log(services)

    return (
        <div>
            <Slider></Slider>
            <div className='grid grid-cols-3 gap-6'>
                {
                services.map(service =><ServiceCard 
                service={service}
                key={service._id}
                ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;