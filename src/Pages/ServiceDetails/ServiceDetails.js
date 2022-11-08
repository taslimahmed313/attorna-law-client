import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Review from '../Review/Review';

const ServiceDetails = () => {
  const {user} = useContext(AuthContext);

    const service = useLoaderData();
    const {serviceName, description} = service
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
        <div className="grid grid-cols-2">
          <div>
            <p>{serviceName}</p>
            <p>{description}</p>
          </div>
          <div>
            <Review></Review>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;