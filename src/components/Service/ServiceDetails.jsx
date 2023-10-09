import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({ service }) => {
  const { id, image, name, price, button, title, description } = service;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-5">
        <figure>
          <img className='w-full bg-slate-500 my-2 rounded-lg ' src={image} alt="Watch" />
        </figure>
        
        <div className="card-body ">
          <h2 className="card-title">Name: {name}</h2>
          <p>{title}</p>
          <h3 className="text-xl">Price: {price}</h3>
          <p> {description.slice(0,150)} ........ </p>
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