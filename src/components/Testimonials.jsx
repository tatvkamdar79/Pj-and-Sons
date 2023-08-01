import React from "react";

const Testimonials = () => {
  return (
    <div className="w-full lg:w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-7">
      <Testimonial
        imgUrl={
          "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/testimonial-request-template-1.jpg?width=595&height=400&name=testimonial-request-template-1.jpg"
        }
      />
      <Testimonial
        imgUrl={
          "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Testimonial-lead-gen-1.jpg?width=595&height=400&name=Testimonial-lead-gen-1.jpg"
        }
      />
      <Testimonial
        imgUrl={
          "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Customer-testimonial-page.jpg?width=595&height=400&name=Customer-testimonial-page.jpg"
        }
      />
    </div>
  );
};

const Testimonial = ({ imgUrl }) => {
  return (
    <div className="w-2/3 h-[500px] p-6 border rounded-md border-gray-400 relative group hover:scale-105 transition-all duration-500 ease-in-out">
      <img
        src={imgUrl}
        alt=""
        className="group-hover:scale-105 transition-all delay-200 duration-500 ease-in-out rounded-md"
      />
      <p className="absolute left-0 top-[39%] lg:top-[45%] text-[100px] font-playfair rotate-180 pr-2">
        ,,
      </p>
      <p className="mt-20 lg:mt-12 ml-2 text text-center font-poppins font-extrabold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        porro qu.
      </p>
      <p className="absolute right-0 top-[49%] lg:top-[49%] text-[100px] font-playfair rotate-360 pr-3">
        ,,
      </p>
      <p className="mt-10 text-center font-semibold font-playfair">
        Tatva Kamdar
        <br />
        <span className="text-sm">CEO, TBK Enterprises</span>
      </p>
    </div>
  );
};

export default Testimonials;
