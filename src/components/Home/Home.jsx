import React from 'react';
import './Home.css';
import Service from '../Service/Service';
import FAQ from '../../Pages/FAQ/FAQ';
import WatchFeatures from '../../WatchFeatures/WatchFeatures';
const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/QCXJ3qTy/torgoen-watches-advertising-photography-with-several-props.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              <span className='spanClr'>Colorful Screen,</span> Smart interactions
            </h1>
            <p className="mb-5 font-medium">
              Our design projects are fresh and simple and will benefit your
              business greatly. Learn more about our work!
            </p>
          </div>
        </div>
      </div>
      <Service></Service>
      <WatchFeatures/>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;