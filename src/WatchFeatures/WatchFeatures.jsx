import React from 'react';
import '../components/Home/Home.css';
const WatchFeatures = () => {
  return (
    <section className="bg-slate-100 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          Up to <span className="spanClr">10 Days</span> of Battery Life
        </h1>
        <p className="my-2">35-hour GPS continuous running mode</p>
        <img
          src="https://i.postimg.cc/Jz64xJxw/watch-floating-view.png"
          alt=""
        />
      </div>
      <div className="md:flex ">
        <div className="text-center py-4 md:w-[50%]">
          <h1 className="text-3xl font-semibold">Up to <span className='text-6xl spanClr font-bold'>10</span> days</h1>
          <h2 className="text-xl font-medium py-2">Battery life</h2>
          <p>
            Seamlessly brand principle-centered sources rather <br /> than
            mission was critical human capital.
          </p>
        </div>
        <div className="text-center pt-3 md:w-[50%]">
          <h1 className="text-3xl font-semibold">
            <span className='spanClr text-6xl font-bold'>45</span>hours
          </h1>
          <h2 className="text-xl font-medium py-2">GPS running mode</h2>
          <p>
            Synergistically enhance team driven potentialities <br /> before
            extensive e-markets globally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WatchFeatures;