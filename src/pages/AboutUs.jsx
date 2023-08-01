import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="w-full">
      <p className="text-5xl font-semibold font-poppins tracking-wider w-full lg:w-1/2 mx-auto text-center my-5 text-gray-700 underline underline-offset-4">
        About Us
      </p>
      <section className="w-5/6 mx-auto flex flex-col lg:flex-row place-items-center justify-evenly gap-y-5 border-b border-gray-500 pb-5">
        <img
          src="https://itec.it/wp-content/uploads/2022/01/immagine-azienda-contattaci.jpeg"
          alt=""
          className="w-full lg:w-2/5"
        />
        <div className="h-full w-full lg:w-2/5 flex flex-col justify-between place-items-stretch gap-y-10 text-lg font-poppins">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
            incidunt veniam. Alias facere maxime eveniet voluptatem ullam
            molestiae consequuntur, quod quasi officia, voluptatibus nobis,
            optio tenetur incidunt beatae ipsam aspernatur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
            incidunt veniam. Alias facere maxime eveniet voluptatem ullam
            molestiae consequuntur, quod quasi officia, voluptatibus nobis,
            optio tenetur incidunt beatae ipsam aspernatur?
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
            incidunt veniam. Alias facere maxime eveniet voluptatem ullam
            molestiae consequuntur, quod quasi officia, voluptatibus nobis,
            optio tenetur incidunt beatae ipsam aspernatur?
          </p>
        </div>
      </section>
      {/* CONTACT INFO */}

      <section className="w-full lg:w-5/6 mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 justify-between place-items-center font-poppins font-semibold gap-y-10">
        <div className="w-fit flex flex-col gap-y-1 text-start border border-gray-500 p-4">
          <p className="text-xl border-b border-gray-400">We are located at,</p>
          <a
            href="https://goo.gl/maps/t6FohED72xKZcmXEA"
            target="_blank"
            className="flex place-items-center border-b border-gray-400"
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
          <p className="text-sm translate-y-1.5">
            *Click on the icon to view location
          </p>
        </div>
        <div>
          <p className="w-full lg:w-1/2 mx-auto text-3xl text-center font-semibold font-poppins text-cyan-800 mb-2 underline underline-offset-4">
            Get To Know Us Better
          </p>
          <div className="w-5/6 lg:w-1/2 mx-auto flex flex-col lg:flex-row gap-y-5 justify-evenly sm:justify-center sm:gap-x-20">
            <Link
              to={"/history"}
              className="text-3xl text-center border rounded-sm border-cyan-800 p-4 text-cyan-800 bg-white hover:text-white hover:bg-cyan-900 transition-all duration-300"
            >
              History
            </Link>
            <Link
              to={"/products"}
              className="text-3xl text-center border rounded-sm border-cyan-800 p-4 text-cyan-800 bg-white hover:text-white hover:bg-cyan-900 transition-all duration-300"
            >
              Products
            </Link>
          </div>
        </div>
        <div className="w-fit lg:flex flex-col gap-y-1 text-start border border-gray-500 p-4 place-items-end">
          <p className="text-lg border-b border-gray-500">Mail Us</p>
          <p>kamdartatv1@gmail.com</p>
          <p>kamdartatv79@gmail.com</p>
          <p className="flex text-lg border-b border-gray-500 gap-x-1 mt-3">
            <BsFillTelephoneFill size={20} className="" /> Call Us
          </p>
          <div className="flex flex-col">
            {/* <p>+91 9014701727</p> */}
            <a href="tel:+919014701727">+91 90147 01 727</a>
            <a href="tel:+919014701727">+91 90147 01 727</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
