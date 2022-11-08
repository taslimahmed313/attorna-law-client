import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const ServiceDetails = () => {
  // const {user} = useContext(AuthContext);

    const service = useLoaderData();
    const {serviceName, description, img, _id} = service
    return (
      <div>
        {/* {
          user?.uid ?
          <div className="grid grid-cols-2">
          <div>
            <p>{serviceName}</p>
            <p>{description}</p>
          </div>
          <div>
            <Review></Review>
          </div>
        </div>
        :
        <div>Please You Must be <Link className='underline' to='/login'>Login</Link> First</div>
        } */}
        <div className="grid grid-cols-2 gap-7">
          <div className=" rounded-lg border border-sky-500 p-3 my-6">
            <img className=" rounded-lg" src={img} alt="" />
            <p className="text-2xl font-semibold">{serviceName}</p>
            <p className=" text-justify">{description}</p>
          </div>
          <div>
            <Review id={_id} serviceName={serviceName}></Review>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;