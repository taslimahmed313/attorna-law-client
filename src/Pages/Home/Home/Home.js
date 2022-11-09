import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import About from '../About/About';
import ServiceCard from '../ServiceCard/ServiceCard';
import Slider from '../Slider/Slider';

const Home = () => {
    const services = useLoaderData();
    useTitle("Home")

    return (
        <div>
            <Slider></Slider>
            <About></About>
            <div className='grid grid-cols-3 gap-6'>
                {
                services.map(service =><ServiceCard 
                service={service}
                key={service._id}
                ></ServiceCard>)
                }
            </div>
            <Link to='/services' className='px-16 py-2 rounded-lg my-5 inline-block text-white bg-slate-700'>See All</Link>
        </div>
    );
};

export default Home;