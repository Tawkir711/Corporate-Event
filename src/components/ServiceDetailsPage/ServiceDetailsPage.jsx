import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetailsPage = () => {

  const services = useLoaderData();
  const { id } = useParams()
  const idInt = parseInt(id)
  const service = services.find(service => service.id === idInt)
  console.log(service);

  return (
    <div className='my-2 md:my-5 lg:my-10'>
      <div>
        <h2 className="text-3xl font-semibold text-center pb-2">
          Service Details
        </h2>
        <hr />
      </div>
      <div className='max-w-5xl mx-auto'>
        <div className="card w-full bg-base-100 shadow-xl mt-5 mx-5">
          <figure>
            <img
              className="w-[200px] lg:w-[500px] bg-slate-500 rounded-lg"
              src={service.image}
              alt="watch"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="font-semibold text-2xl">
              {service.name}
            </h2>
            <p className="text-lg font-medium">{service.price}</p>
            <p>{service.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;