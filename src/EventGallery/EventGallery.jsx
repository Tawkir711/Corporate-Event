
import React from "react";
import { Helmet } from "react-helmet";

const EventGallery = () => {
  return (
    <div
      data-aos="fade-up-left"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 px-2"
    >
      <Helmet>
        <title>EventGallery</title>
      </Helmet>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.postimg.cc/pXHrTxT7/md-duran-d-Ej-MN6-JXcj8-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.postimg.cc/CLpypx1Z/helena-lopes-x-UXm-S-g-OFR8-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.postimg.cc/7LPf4TDX/mindaugas-skrupskelis-fg-O8f-RG61-TU-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.postimg.cc/BnKCFk1R/annie-spratt-Qckxruozj-Rg-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.postimg.cc/htkdqGv5/icons8-team-y-Tw-Xp-LO5-HAA-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.postimg.cc/wB5DfSpZ/evangeline-shaw-x-Rl-I-L-kvrw-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.postimg.cc/44YQZ2b7/evangeline-shaw-nw-LTVwb7-Db-U-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.postimg.cc/MGb94zjJ/stem-list-EVgs-Ab-L51-Rk-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.postimg.cc/m27RDFvY/charlesdeluvio-wn7d-Oz-Uh3-Rs-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.postimg.cc/j582MJxw/antenna-oh-NCIi-KVT1g-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.postimg.cc/MT4tf5cd/jakob-dalbjorn-cu-KJre3ny-Yc-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.postimg.cc/XJLMFTK4/claudio-schwarz-w-DZkpyb-Af-Y-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default EventGallery;
