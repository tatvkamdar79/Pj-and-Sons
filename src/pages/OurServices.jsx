import React from "react";
import { Link } from "react-router-dom";
import { FaTruck } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";

const OurServices = () => {
  return (
    <div>
      <section className="text-black py-10 w-2/3 mx-auto">
        <p className="text-6xl text-center font-poppins font-extrabold tracking-wider my-10 mb-20 underline underline-offset-8 decoration-cyan-700">
          Our Services
        </p>

        <div className="grid grid-cols-1 gap-x-4 gap-y-5 lg:px-20">
          <div className="w-full flex flex-col place-items-start text-sm text-gray-600">
            <FaTruck size={80} className="h-[100px] text-cyan-700" />
            <p className="text-3xl mb-5 text-gray-800 underline underline-offset-4 font-poppins font-extrabold">
              Prompt Delivery
            </p>
            <p className="w-2/3 my-2">
              Large stock of products for immediate delivery: all-stainless
              pressure gauges, accessories, manifolds and gauge valves and
              diaphragm seals.
            </p>
            <br />
            <p className="w-2/3 my-2">
              Immediate availability of standard products and delivery within
              24/48 hours for stock material
            </p>
            <br />
            <p className="w-2/3 my-2">
              Prompt delivery has become a constant requirement of the market
              and has therefore become one of our working methods from which
              customers can benefit simply by contacting us for availability.
            </p>
            <div className="w-full h-[1px] bg-gray-500 my-5" />
          </div>

          <div className="w-full flex flex-col place-items-start text-sm text-gray-600">
            <BsTools size={55} className="h-[100px] text-cyan-700" />
            <p className="text-3xl mb-5 text-gray-800 underline underline-offset-4 font-poppins font-extrabold">
              Part Fixing
            </p>
            <p className="w-2/3 my-2">
              Large stock of products for immediate delivery: all-stainless
              pressure gauges, accessories, manifolds and gauge valves and
              diaphragm seals.
            </p>
            <p className="w-2/3 my-2">
              Issue of calibration reports within a few days.
            </p>
            <p className="w-2/3 my-2">
              Supply of instruments with calibration reports.
            </p>
            <p className="w-2/3 my-2">Re-certification of instruments.</p>

            <div className="w-4/5 h-[1px] bg-gray-500" />
          </div>

          <div className="w-full flex flex-col place-items-start text-sm text-gray-600">
            <RiCustomerService2Fill
              size={80}
              className="h-[100px] text-cyan-700"
            />
            <p className="text-3xl mb-5 text-gray-800 underline underline-offset-4 font-poppins font-extrabold">
              After Sales Support
            </p>
            <p className="w-2/3">
              In our laboratory we have several vacuum and filling devices and
              we can assemble in a very short time chemical sels on:
            </p>
            <ul className="w-2/3 my-2 ml-7 list-disc">
              <li>Pressure gauges</li>
              <li>Differential pressure gauges</li>
              <li>Pressure Transmitters</li>
              <li>Differential pressure transmitters</li>
              <li>Pressure switches</li>
            </ul>
            <p className="w-2/3 my-2">
              Direct or remote assembly (via capillary) with different types of
              transmission fluid : standard oil, oil for high temperature
              application , oxygen use and FDA oil for food, pharmaceutical and
              sanitary use.
            </p>
            <p className="w-2/3 my-2">
              Wide range of diaphragm materials from standard AISI 316L to
              MONEL; HC276, ALLOY 625, TANTALUM …
            </p>
            <p className="w-2/3 my-2">
              The customer-supplied instrument is returned to the customer after
              assembly of the diaphragm seal with calibration test report and
              hydrostatic test.
            </p>
            <p className="w-2/3 my-2">
              For the correct choice and availability of the diaphragm seal and
              type of transmission fluid, please contact our
              technical/commercial department.
            </p>
            <div className="w-3/5 h-[1px] bg-gray-500" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
