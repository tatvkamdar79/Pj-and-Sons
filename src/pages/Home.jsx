import React from "react";
import { Link } from "react-router-dom";
import { FaTruck } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <section
        className="h-[70vh] bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            'url("https://itec.it/wp-content/uploads/2022/01/bkHP.jpg")',
        }}
      >
        <div className="w-full h-full text-7xl flex flex-col gap-y-10 justify-center place-items-center text-center font-poppins font-extrabold tracking-wide text-white">
          <p>Serving Customers</p>
          <p>Since 1970</p>
          <div className="w-full flex justify-evenly sm:justify-center sm:gap-x-20">
            <Link
              to={"/history"}
              className="text-3xl border rounded-sm border-cyan-800 p-4 text-white bg-[#051c2c] bg-opacity-60 hover:text-white hover:bg-[#051c2c] hover:bg-opacity-90 transition-all duration-300"
            >
              History
            </Link>
            <Link
              to={"/products"}
              className="text-3xl border rounded-sm border-cyan-800 p-4 text-white bg-[#051c2c] bg-opacity-60 hover:text-white hover:bg-[#051c2c] hover:bg-opacity-90 transition-all duration-300"
            >
              Products
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#051c2c] text-white py-10">
        <p className="text-6xl text-center font-poppins font-extrabold tracking-wider">
          Our Services
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-x-4 gap-y-10">
          <div className="h-[370px] w-full flex flex-col justify-between place-items-center">
            <FaTruck size={80} className="h-[100px]" />
            <p className="text-3xl">Prompt Delivery</p>
            <p className="text-sm text-gray-300 w-2/3 mx-auto">
              Large stock of products for immediate delivery: all-stainless
              pressure gauges, accessories, manifolds and gauge valves and
              diaphragm seals.
            </p>
            <Link
              to={"/our-services"}
              className="border border-white px-4 py-2 rounded-md hover:scale-105 hover:bg-white hover:text-black transition-all duration-300"
            >
              Learn More
            </Link>
            <div className="w-5/6 h-[1px] bg-gray-500" />
          </div>
          <div className="h-[370px] w-full flex flex-col justify-between place-items-center">
            <BsTools size={55} className="h-[100px]" />
            <p className="text-3xl">Part Fixing</p>
            <p className="text-sm text-gray-300 w-2/3 mx-auto">
              Large stock of products for immediate delivery: all-stainless
              pressure gauges, accessories, manifolds and gauge valves and
              diaphragm seals.
            </p>
            <Link
              to={"/our-services"}
              className="border border-white px-4 py-2 rounded-md hover:scale-105 hover:bg-white hover:text-black transition-all duration-300"
            >
              Learn More
            </Link>
            <div className="w-5/6 h-[1px] bg-gray-500" />
          </div>
          <div className="h-[370px] w-full flex flex-col justify-between place-items-center">
            <RiCustomerService2Fill size={80} className="h-[100px]" />
            <p className="text-3xl">After Sales Support</p>
            <p className="text-sm text-gray-300 w-2/3 mx-auto">
              Large stock of products for immediate delivery: all-stainless
              pressure gauges, accessories, manifolds and gauge valves and
              diaphragm seals.
            </p>
            <Link
              to={"/our-services"}
              className="border border-white px-4 py-2 rounded-md hover:scale-105 hover:bg-white hover:text-black transition-all duration-300"
            >
              Learn More
            </Link>
            <div className="w-5/6 h-[1px] bg-gray-500" />
          </div>
        </div>
      </section>
      <section className="w-full my-10">
        <p className="w-5/6 mx-auto text-5xl font-poppins font-extrabold border-b-2 border-gray-400 my-5">
          Testimonials
        </p>
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
