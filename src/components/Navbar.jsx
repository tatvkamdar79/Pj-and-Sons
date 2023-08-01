import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidRightArrow } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [viewMenu, setViewMenu] = useState(false);
  const closeMenu = () => setViewMenu(false);
  return (
    <nav className="w-full flex flex-col sticky top-0 bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm z-50">
      <div className="h-28 flex justify-between place-items-center px-3 lg:px-10 border-b border-gray-300">
        <section id="logo" className="text-3xl font-bold font-poppins">
          <Link to={"/"}>
            P J <span className="px-2">&</span> S O N S
          </Link>
        </section>
        <section id="menu" className="hidden lg:block w-3/4">
          <ul className="w-full flex justify-between gap-x-5 text-lg font-semibold font-poppins">
            <Link
              to={"/"}
              className="py-2.5 px-10 border rounded-md shadow-gray-300 hover:bg-gray-50 hover:shadow-md transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to={"/about-us"}
              className="py-2.5 px-10 border rounded-md shadow-gray-300 hover:bg-gray-50 hover:shadow-md transition-all duration-300"
            >
              About Us
            </Link>
            <Link
              to={"/products"}
              className="py-2.5 px-10 border rounded-md shadow-gray-300 hover:bg-gray-50 hover:shadow-md transition-all duration-300 group relative"
            >
              Products
              <BiSolidRightArrow className="inline ml-10 -mr-5 text-gray-600 group-hover:rotate-90 transition-all duration-500" />
              <div className="absolute w-0 group-hover:min-h-[180px] h-fit group-hover:w-56 -translate-x-[41px] translate-y-[100px] group-hover:translate-y-[12px] opacity-0 group-hover:opacity-100 bg-transparent group-hover:bg-white transition-all duration-500 ease-in-out">
                <ul className="flex flex-col gap-y-3 py-5 rounded-md p-5">
                  <li className="w-full flex place-items-center opacity-0 group-hover:opacity-100 group/pressure peer/pressure border-b border-gray-400">
                    <span className="w-36">Pressure</span>
                    <BiSolidRightArrow className="w-10 text-gray-600 group-hover/pressure:rotate-90 transition-all duration-300" />
                  </li>
                  <li className="h-1 peer-hover/pressure:h-[100px] hover:h-[100px] w-full transition-all duration-300 overflow-hidden">
                    <ul className="ml-10 list-disc text-gray-700">
                      <li>Gauges</li>
                      <li>Gauges</li>
                      <li>Gauges</li>
                    </ul>
                  </li>
                  <li className="w-full flex place-items-center opacity-0 group-hover:opacity-100 group/temperature peer/temperature border-b border-gray-400">
                    <span className="w-36">Temperature</span>
                    <BiSolidRightArrow className="w-10 text-gray-600 group-hover/temperature:rotate-90 transition-all duration-300" />
                  </li>
                  <li className="h-1 peer-hover/temperature:h-[100px] hover:h-[100px] w-full transition-all duration-300 overflow-hidden">
                    <ul className="ml-10 list-disc text-gray-700">
                      <li>Gauges</li>
                      <li>Gauges</li>
                      <li>Gauges</li>
                    </ul>
                  </li>
                  <li className="w-full flex place-items-center opacity-0 group-hover:opacity-100 group/level peer/level border-b border-gray-400">
                    <span className="w-36">Level</span>
                    <BiSolidRightArrow className="w-10 text-gray-600 group-hover/level:rotate-90 transition-all duration-300" />
                  </li>
                  <li className="h-1 peer-hover/level:h-[100px] hover:h-[100px] w-full transition-all duration-300 overflow-hidden">
                    <ul className="ml-10 list-disc text-gray-700">
                      <li>Gauges</li>
                      <li>Gauges</li>
                      <li>Gauges</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </Link>
            <Link
              to={"/"}
              className="py-2.5 px-10 border rounded-md shadow-gray-300 hover:bg-gray-50 hover:shadow-md transition-all duration-300"
            >
              Industries
            </Link>
            <Link
              to={"/"}
              className="py-2.5 px-10 border rounded-md shadow-gray-300 hover:bg-gray-50 hover:shadow-md transition-all duration-300"
            >
              Offers and Updates
            </Link>
          </ul>
        </section>
        <section className="hidden lg:flex gap-x-7 place-items-center font-poppins font-semibold text-lg">
          <div>
            <a href="https://goo.gl/maps/t6FohED72xKZcmXEA" target="_blank">
              <MdLocationPin size={48} className="text-orange-500" />
            </a>
          </div>
          {/* <div className="flex flex-col place-items-center gap-x-2">
            <p>Contact Us</p>
            <div className="flex justify-center place-items-center">
              <BsFillTelephoneFill size={24} className="" />
              <a href="tel:+919014701727">+91 90147 01 727</a>
            </div>
          </div> */}
        </section>
        <section id="phone-menu-bar" className="lg:hidden cursor-pointer">
          <HiMenuAlt3 size={40} onClick={() => setViewMenu(true)} />
        </section>
      </div>
      <div
        className={`lg:hidden w-full ${
          viewMenu ? "h-[530px] opacity-100" : "h-0 opacity-0"
        } overflow-hidden transition-all duration-1000`}
      >
        <ul className="h-full flex flex-col place-items-start gap-y-5 px-5 py-5 bg-gray-50 border-b border-gray-400 text-xl text-cyan-700 font-poppins font-semibold">
          <li>
            <GrFormClose
              size={50}
              onClick={closeMenu}
              className="cursor-pointer"
            />
          </li>
          <Link
            to={"/"}
            className="w-96 border-b border-gray-300 rounded-md ml-2 py-2"
            onClick={closeMenu}
          >
            Home
          </Link>{" "}
          <Link
            to={"/about-us"}
            className="w-96 border-b border-gray-300 rounded-md ml-2 py-2"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to={"/products"}
            className="w-96 border-b border-gray-300 rounded-md ml-2 py-2"
            onClick={closeMenu}
          >
            Products
          </Link>
          <Link
            to={"/"}
            className="w-96 border-b border-gray-300 rounded-md ml-2 py-2"
            onClick={closeMenu}
          >
            Industries
          </Link>
          <Link
            to={"/"}
            className="w-96 border-b border-gray-300 rounded-md ml-2 py-2"
            onClick={closeMenu}
          >
            Offers and Updates
          </Link>
          <section className="w-full flex justify-between place-items-center font-poppins font-semibold text-sm ml-[-13px]">
            <div>
              <a
                href="https://goo.gl/maps/t6FohED72xKZcmXEA"
                target="_blank"
                className="flex place-items-center"
              >
                <MdLocationPin size={48} className="text-orange-500" />
                <span className="w-40">
                  Hill Station Rd, RaniGunj,
                  <br />
                  Secunderabad,
                  <br />
                  Telangana,
                  <br />
                  500003
                </span>
              </a>
            </div>
            <div className="h-full flex flex-col place-items-end gap-x-2">
              <p className="text-lg">Contact Us</p>
              <p>kamdartatv1@gmail.com</p>
              <p>kamdartatv79@gmail.com</p>
              <div className="flex justify-center place-items-center cursor-pointer">
                <BsFillTelephoneFill size={24} className="" />
                {/* <p>+91 9014701727</p> */}
                <a href="tel:+919014701727">+91 90147 01 727</a>
              </div>
            </div>
          </section>
        </ul>
        <section id="phone-menu-bar" className="lg:hidden">
          <HiMenuAlt3 size={40} onClick={() => setViewMenu(true)} />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
