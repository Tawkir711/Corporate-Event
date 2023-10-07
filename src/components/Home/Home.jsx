import React from 'react';
import './Home.css';
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
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              <span className='spanClr'>Colorful Screen,</span> Smart interactions
            </h1>
            <p className="mb-5 font-medium">
              Our design projects are fresh and simple and will benefit your
              business greatly. Learn more about our work!
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Search here"
                className="input input-bordered w-full max-w text-black"
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;