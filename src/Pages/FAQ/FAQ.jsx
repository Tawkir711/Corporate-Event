import React from 'react';

const FAQ = () => {
  return (
    <section className="md:flex lg:flex gap-5 my-20">
      <div  className="flex justify-center items-center rounded-xl md:w-[100%] lg:w-[50%] px-4">
        <img
          src="https://i.postimg.cc/s2Bv6GrL/0-Fd-LLSj-LPud-Gd-Pt5.png"
          alt="FAQ img"
        />
      </div>
      <div className=" md:w-[100%] lg:w-[50%]">
        <h1 className="text-3xl font-semibold text-center py-4">
          Frequently asked <span className="spanClr">Questions</span> ?
        </h1>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium bg-black text-white">
            <span className="spanClr">01. </span>What is the impact of corporate
            events?
          </div>
          <div className="collapse-content">
            <p>
              Corporate events such as conferences, socials, and team building
              are good ways to boost employee engagement and improve
              productivity, employee performance, and staff retention. This, in
              turn, leads to revenue growth.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-black text-white">
            <span className="spanClr">02. </span> What makes an event
            successful?
          </div>
          <div className="collapse-content">
            <p>
              It's often been said that the success of anything stems from good
              planning. So, if you're wondering what makes an event successful,
              then the best way to start is by making sure it is planned
              meticulously, comprehensively and accurately. And that means
              getting things moving well in advance.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-black text-white">
            <span className="spanClr">03. </span> How do you describe an event
            professionally?
          </div>
          <div className="collapse-content">
            <p>
              The event description should typically give community members a
              sense of who, what and how. Briefly explain who is
              speaking/performing and what will they be talking about or doing.
              A lecture title alone generally won't get people to attend.
              Provide more details and context to generate interest.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-black text-white">
            <span className="spanClr">04. </span> Why is creativity necessary in
            event management?
          </div>
          <div className="collapse-content">
            <p>
              Without creativity, all events would look the same and they'd be
              no fun. Creativity boosts audience engagement, improves ROI, and
              makes your business the talk of the town. The keyword here is
              design: stage design, UX/UI design, presentation design, and much
              more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;