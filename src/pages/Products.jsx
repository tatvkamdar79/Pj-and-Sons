import React, { useContext, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";
import { SiWish } from "react-icons/si";
import { Link } from "react-router-dom";
import { cartContext } from "../App";

const Products = () => {
  const { cart, setCart } = useContext(cartContext);
  console.log(cart);
  const [category, setCategory] = useState("pressure");

  const products = [
    {
      productId: "P001",
      productName: "Pressure Gauge",
      description: "A gauge to measure pressure",
      applications: ["Industrial", "HVAC"],
      price: 29.99,
      imgUrl: "https://itec.it/wp-content/uploads/2022/03/A101-300x300.jpg",
    },
    {
      productId: "P002",
      productName: "Pressure Transmitter",
      description: "A device to transmit pressure readings",
      applications: ["Process Control", "Oil & Gas"],
      price: 89.99,
      imgUrl: "https://itec.it/wp-content/uploads/2022/03/A101-300x300.jpg",
    },
    {
      productId: "P003",
      productName: "Temperature Gauge",
      description: "A gauge to measure temperature",
      applications: ["Laboratory", "Food Industry"],
      price: 19.99,
      imgUrl: "https://itec.it/wp-content/uploads/2022/03/A101-300x300.jpg",
    },
    {
      productId: "P004",
      productName: "Thermocouple",
      description: "A sensor for measuring temperature",
      applications: ["Power Generation", "Automotive"],
      price: 39.99,
      imgUrl: "https://itec.it/wp-content/uploads/2022/03/A101-300x300.jpg",
    },
    {
      productId: "P005",
      productName: "Flow Meter",
      description: "A device to measure fluid flow rate",
      applications: ["Water Management", "Chemical Processing"],
      price: 79.99,
      imgUrl: "https://itec.it/wp-content/uploads/2022/03/A101-300x300.jpg",
    },
    {
      productId: "P006",
      productName: "Flow Switch",
      description: "A switch to detect fluid flow",
      applications: ["Pump Systems", "HVAC"],
      price: 49.99,
      imgUrl: "https://itec.it/wp-content/uploads/2022/03/A101-300x300.jpg",
    },
    {
      productId: "P007",
      productName: "Pressure Gauge Accessories Kit",
      description: "A kit containing various accessories for pressure gauges",
      applications: ["Industrial", "Automotive"],
      price: 14.99,
      imgUrl: "https://itec.it/wp-content/uploads/2022/03/A101-300x300.jpg",
    },
    {
      productId: "P008",
      productName: "Temperature Gauge Accessories Kit",
      description:
        "A kit containing various accessories for temperature gauges",
      applications: ["Laboratory", "HVAC"],
      price: 9.99,
      imgUrl: "https://itec.it/wp-content/uploads/2022/03/A101-300x300.jpg",
    },
    {
      productId: "P009",
      productName: "Flow Meter Accessories Kit",
      description: "A kit containing various accessories for flow meters",
      applications: ["Water Management", "Process Control"],
      price: 19.99,
      imgUrl: "https://itec.it/wp-content/uploads/2022/03/A101-300x300.jpg",
    },
    {
      productId: "P010",
      productName: "Pressure Transmitter Accessories Kit",
      description:
        "A kit containing various accessories for pressure transmitters",
      applications: ["Industrial", "Oil & Gas"],
      price: 24.99,
      imgUrl: "https://itec.it/wp-content/uploads/2022/03/A101-300x300.jpg",
    },
  ];

  return (
    <div>
      <div
        className="h-[350px] flex place-items-center justify-center bg-cover"
        style={{
          backgroundImage:
            'url("https://itec.it/wp-content/uploads/2022/02/prodBG.jpg"',
        }}
      >
        <p className="text-6xl text-center text-white font-extrabold font-poppins tracking-wider">
          Our Products
        </p>
      </div>
      <div className="w-full md:w-2/3 mx-auto flex px-2 md:px-0 my-5 place-items-center gap-x-5">
        {/* Search */}
        <BiSearchAlt size={35} className="text-green-700" />
        <input
          type="text"
          className="w-1/2 p-2 -translate-x-4 border-2 border-gray-500 rounded-lg outline-none focus:border-green-700 transition-all"
        />
        {/* Total results */}
        <p className="w-1/2 font-semibold font-poppins text-lg">
          Showing 1 - 12 of 60 results
        </p>
      </div>

      <div className="h-[1px] bg-gray-500 md:w-3/4 mx-auto" />
      <div className="w-2/3 mx-auto flex my-5">
        <section className="hidden lg:block md:w-1/5 h-[49vh] p-4 border border-gray-500">
          <ul>
            <li className="font-extrabold text-2xl underline underline-offset-4 decoration-slate-300 mt-1 mb-4 text-gray-900">
              Categories
            </li>
            <li>
              <div>
                <p className="w-3/4 text-xl font-extrabold font-poppins tracking-wider text-gray-800 border-b border-gray-300">
                  Pressure
                </p>
                <ul className="ml-8 text-gray-600 list-disc">
                  <li>Gauges</li>
                  <li>Accessories</li>
                  <li>Another Field</li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <p className="w-3/4 text-xl font-extrabold font-poppins tracking-wider text-gray-800 border-b border-gray-300">
                  Temperature
                </p>
                <ul className="ml-8 text-gray-600 list-disc">
                  <li>Gauges</li>
                  <li>Accessories</li>
                  <li>Another Field</li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <p className="w-3/4 text-xl font-extrabold font-poppins tracking-wider text-gray-800 border-b border-gray-300">
                  Level
                </p>
                <ul className="ml-8 text-gray-600 list-disc">
                  <li>Gauges</li>
                  <li>Accessories</li>
                  <li>Another Field</li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
        <section className="w-full lg:w-4/5 grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-10">
          {products.map((product) => (
            <Link
              key={product.productId}
              to={`/products/${category}/${product.productId}`}
              state={product}
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col place-items-center justify-center gap-y-2">
      <img
        src="https://itec.it/wp-content/uploads/2022/03/A101-300x300.jpg"
        alt=""
        className="w-full hover:scale-[103%] transition-all duration-300"
      />
      <p className="h-16 text-2xl text-center font-semibold font-poppins">
        {product?.productName}
      </p>
      <p className="w-4/5 mx-auto text-center h-12">{product?.description}</p>
      <p className="font-poppins font-extrabold text-xl">
        INR {product?.price}
      </p>
      <div className="w-full md:w-5/6 flex justify-between gap-x-3">
        <button
          onClick={() => setCart((cart) => [...cart, "abcdefg"])}
          className="w-[45%] flex justify-between place-items-center px-3 py-2 bg-cyan-600 text-white border-2 border-gray-400 rounded-md hover:scale-105 transition-all duration-300 hover:bg-cyan-700"
        >
          <p className="flex text-xl font-extrabold font-poppins">
            Add<span className="hidden md:block lg:hidden px-1">to cart</span>
          </p>
          <BsCartCheck size={25} />
        </button>
        <button className="w-[55%] flex justify-between place-items-center px-3 py-2 bg-orange-500 text-white border-2 border-gray-400 rounded-md hover:scale-105 transition-all duration-300 hover:bg-orange-600">
          <SiWish size={32} />
          <p className="flex text-xl font-extrabold font-poppins">
            <span className="hidden md:block lg:hidden px-1">Add to</span>
            Wishlist
          </p>
        </button>
      </div>
      <div className="h-[1px] bg-gray-500 w-full md:w-5/6 mt-5" />
    </div>
  );
};

export default Products;
