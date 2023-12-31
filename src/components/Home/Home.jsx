import React from 'react';
import './Home.css';
import Service from '../Service/Service';
import FAQ from '../../Pages/FAQ/FAQ';
import AboutUs from '../../AboutUs/AboutUs';
import { Helmet } from 'react-helmet';
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Corporate Event-Home</title>
      </Helmet>
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/QM2XYB6f/headway-F2-KRf-Qf-Cqw-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">
              A Night of Elegance <br />
              <span className="spanClr"> Exclusive Event</span>
            </h1>
            <p className="mb-5 text-sm md:text-xl font-medium">
              Join us for an unforgettable evening of sophistication and style
              at <br />  <span className='spanClr'>Exclusive Event</span>. Stepinto a world of luxury and
              exclusivity, where every<br /> detail has been meticulously curated to
              provide  you with an experience like no other.
            </p>
          </div>
        </div>
      </div>
      <Service></Service>
      <AboutUs></AboutUs>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;