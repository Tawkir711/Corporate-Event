import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({ service }) => {
  const { id, image, name, price, button, title } = service;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className='w-[300px] bg-slate-500 my-2 rounded-lg' src={image} alt="Watch" />
        </figure>
        
        <div className="card-body border">
          <h2 className="card-title">{name}</h2>
          <h3 className="text-xl">{price}</h3>
          <p>{title}</p>
          <div className="card-actions justify-center pt-4">
            <Link to={`/service/${id}`}>
              <button className="btn btn-grad">{button}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;