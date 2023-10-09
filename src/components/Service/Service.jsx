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
      <h2 className="text-4xl font-semibold text-center">
        Our <span className='spanClr'>Service</span> Event
      </h2>
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {services.map((service) => (
          <ServiceDetails service={service} key={service.id}></ServiceDetails>
        ))}
      </div>
    </div>
  );
};

export default Service;