import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='text-center'>
      <h2 className="text-3xl font-semibold text-red-500">
        404
        <br />Page is not Found ...!!
      </h2>
      <Link to={'/'}>
        <button className="btn btn-secondary">Go back Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;