import React from 'react';
import '../components/Home/Home.css';
const AboutUs = () => {
  return (
    <div className="p-2">
      <h3 className="font-bold text-center text-3xl my-6">About Us</h3>
      <div className="md:flex lg:flex gap-5">
        <figure>
          <img
            src="https://i.postimg.cc/XJp30qky/product-school-Gajr-OEN6m4-unsplash.jpg"
            className=" rounded-lg w-[500px] h-[400px]"
            alt="About us img"
          />
        </figure>
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-4">
            Discover the journey behind{" "}
            <span className="spanClr">Exclusive Event</span> management
          </h2>
          <p className="text-xl">
            Join us for an unforgettable evening of elegance and exclusivity at 
            Exclusive.<br /> Indulge in gourmet dining, live entertainment,
            and VIP experiences  in a <br />one-of-a-kind setting. Limited tickets 
            available reserve yours now for an extraordinary night out!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;