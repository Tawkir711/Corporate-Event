import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';

const Service = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('watch.json')
      .then(res => res.json())
    .then(data => setServices(data))
  }, [])

  return (
    <div className="my-10">
      <h2 className="text-4xl font-semibold pb-2 text-center">
        Core <span className='spanClr'>Service</span> for Smart People
      </h2>
      <p className="text-center font-medium text-[16px]">
        The following reasons show the advantages of adding the watch to your
        <br />
        service pages, demos, and checkouts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {services.map((service) => (
          <ServiceDetails service={service} key={service.id}></ServiceDetails>
        ))}
      </div>
    </div>
  );
};

export default Service;