import React from "react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#051c2c] mt-10">
      <div className="w-full lg:w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-4 place-items-centers text-white font-poppins p-10">
        <section className="h-20 lg:h-96 text-5xl font-extrabold text-center lg:text-start">
          P J <span className="px-1">&</span> S O N S
        </section>
        <section className="h-60 lg:h-96 w-5/6 mx-auto py-3">
          <p className="w-2/3 text-3xl font-extrabold text-start px-1 border-b">
            About us
          </p>
          <ul className="list-disc ml-7 mt-1 flex flex-col">
            <Link to={"/about-us"} className="p-2">
              <li>About</li>
            </Link>
            <Link to={"/history"} className="p-2">
              <li>History</li>
            </Link>
            <Link to={"/history"} className="p-2">
              <li>History</li>
            </Link>
          </ul>
        </section>
        <section className="h-60 lg:h-96 w-5/6 mx-auto py-3">
          <p className="w-2/3 text-3xl font-extrabold text-start px-1 border-b">
            Products
          </p>
          <ul className="list-disc ml-7 mt-1 flex flex-col">
            <Link to={"/products/pressure"} className="p-2">
              <li>Pressure</li>
            </Link>
            <Link to={"/history/temperature"} className="p-2">
              <li>Temperature</li>
            </Link>
            <Link to={"/history/flow"} className="p-2">
              <li>Flow</li>
            </Link>
          </ul>
        </section>
        <section className="h-96 w-5/6 mx-auto py-3">
          <p className="w-2/3 text-3xl font-extrabold text-start px-1 border-b">
            Get In Touch
          </p>
          <div className="gap-y-1 text-start place-items-end mt-2">
            <p className="text-lg border-b border-gray-500 w-32 my-1 font-extrabold">
              Mail Us
            </p>
            <p>kamdartatv1@gmail.com</p>
            <p>kamdartatv79@gmail.com</p>
            <p className="flex text-lg border-b border-gray-500 gap-x-1 w-32 my-2 mt-3 font-extrabold">
              <BsFillTelephoneFill size={20} className="" /> Call Us
            </p>
            <div className="flex flex-col">
              {/* <p>+91 9014701727</p> */}
              <a href="tel:+919014701727">+91 90147 01 727</a>
              <a href="tel:+919014701727">+91 90147 01 727</a>
            </div>
            <p className="flex place-items-center text-lg gap-x-2 my-2 mt-3 font-extrabold">
              <BiLogoFacebookSquare size={30} className="" /> PJandSONS
            </p>
            <p className="flex place-items-center text-lg gap-x-2 my-2 mt-3 font-extrabold">
              <GrInstagram size={25} className="" /> PJandSONS
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
