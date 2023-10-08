import React from 'react';

const FAQ = () => {
  return (
    <section className="md:flex lg:flex gap-5 my-20">
      <div className=" rounded-xl md:w-[100%] lg:w-[50%] px-4">
        <img src="https://i.postimg.cc/tJwr8g4k/red-watch.png" alt="" />
      </div>
      <div className=" md:w-[100%] lg:w-[50%]">
        <h1 className="text-3xl font-semibold text-center py-4">
          Frequently asked <span className="spanClr">Questions</span> ?
        </h1>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium bg-black text-white">
            <span className="spanClr">01. </span>Which license do I need?
          </div>
          <div className="collapse-content">
            <p>
              Uniquely leverage other's distinctive infomediaries rather than
              leveraged supply chains. Continually seize distributed
              collaboration and idea-sharing whereas user.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-black text-white">
            <span className="spanClr">02. </span> How do I get access to a
            theme?
          </div>
          <div className="collapse-content">
            <p>
              Rapidiously incentivize virtual e-commerce and exceptional
              e-tailers. Progressively network focused catalysts for change
              without orthogonal benefits. Dramatically empower.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-black text-white">
            <span className="spanClr">03. </span> How do I see previous orders?
          </div>
          <div className="collapse-content">
            <p>
              Proactively monetize long-term high-impact innovation and scalable
              relationships. Dynamically mesh principle-centered functionalities
              before next-generation best practices. Distinctively empower.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-black text-white">
            <span className="spanClr">04. </span> How can set notification?
          </div>
          <div className="collapse-content">
            <p>
              To set up notifications, connect your fitness tracker to your
              watch companion app and enable the notification feature
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;