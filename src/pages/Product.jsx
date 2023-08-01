import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { BsCartCheck } from "react-icons/bs";
import { SiWish } from "react-icons/si";
import { cartContext } from "../App";

const Product = () => {
  const { category, productId } = useParams();
  const { state } = useLocation();
  const [product, setProduct] = useState({});
  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(0);
  
  useEffect(() => {
    setProduct(state);
  }, []);

  const { cart, setCart } = useContext(cartContext);

  const checkIfInCart = () => {
    const items = cart.map((item) => item.productId === productId);
    console.log("ITEMS", items);
    if (items.length === 0) {
      return false;
    }
    return true;
  };

  const getItemFormCart = (id) => {
    if (cart.length === 0) {
      return false;
    }
    const filteredItems = cart.filter((item) => item.productId === id);
    if (filteredItems.length === 0) {
      return false;
    }
    return filteredItems[0];
  };

  const getItemQuantityFromCart = (id) => {
    if (checkIfInCart(id)) {
      const item = getItemFormCart(id);
      if (item) {
        return item.quantity;
      }
      return 0;
    }
  };

  const addProductToCart = (product) => {
    // console.log(product);
    const tempCart = [...cart];
    console.log("TC", tempCart);

    if (checkIfInCart()) {
      const tempCart = [...cart];
      console.log("TC", tempCart);
      for (let i = 0; i < tempCart.length; i++) {
        if (tempCart[i].productId === product.productId) {
          tempCart[i].quantity += 1;
          break;
        }
        setCart(tempCart);
        console.log("Item already in cart! So increased quantity.");
      }
    } else {
      const newProduct = { ...product, quantity: 1 };
      setCart((cart) => [...cart, newProduct]);
      setInCart(true);
    }
  };

  return (
    <div className="min-h-[50vh] w-5/6 mx-auto">
      <section className="w-full flex flex-col lg:flex-row justify-evenly my-5">
        <div className="w-full lg:w-2/5 mx-auto flex justify-center place-items-center border border-gray-300">
          <AliceCarousel>
            <div className="w-full mx-auto flex justify-center place-items-center">
              <img src={state.imgUrl} alt="" className="w-[400px]" />
            </div>
            <div className="w-full mx-auto flex justify-center place-items-center">
              <img src={state.imgUrl} alt="" className="w-[400px]" />
            </div>
            <div className="w-full mx-auto flex justify-center place-items-center">
              <img src={state.imgUrl} alt="" className="w-[400px]" />
            </div>
          </AliceCarousel>
        </div>
        <div className="w-full lg:w-3/5 flex flex-col justify-start gap-y-10 p-10">
          <p className="lg:w-1/2 pr-8 font-poppins font-extrabold text-4xl border-b-2 border-gray-400">
            {product?.productName}
          </p>
          <p className="lg:w-1/2 flex flex-col font-serif font-extrabold text-2xl border-b border-gray-300">
            {product?.productId}
            <span className="text-sm">Product Id</span>
          </p>
          <p className="lg:w-1/2 flex flex-col font-poppins font-extrabold border-b border-gray-300 text-xl">
            <span className="font-serif font-semibold text-lg underline underline-offset-4 decoration-gray-300 text-gray-800">
              Description
            </span>
            {product?.description}
          </p>
          <p className="lg:w-1/2 flex gap-x-1 border-b border-gray-300">
            <span className="font-serif">Applications: </span>
            <span className="font-semibold font-poppins">
              {product?.applications &&
                product?.applications.map((application, index) =>
                  index !== product?.applications.length - 1
                    ? application + ", "
                    : application
                )}
            </span>
          </p>
          <p className="lg:w-1/2 flex flex-col border-b border-gray-300">
            <span className="font-semibold font-poppins text-xl">
              INR {product?.price}
            </span>
            <span className="text-sm font-serif font-semibold">Price</span>
          </p>
          <div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-between place-items-center gap-y-5">
            <button
              onClick={() => addProductToCart(product)}
              className={`w-3/4 lg:w-2/5 flex justify-evenly place-items-center px-3 py-2 ${
                inCart ? "bg-gray-700" : "bg-cyan-600 hover:bg-cyan-700"
              } text-white border-2 border-gray-400 rounded-md hover:scale-105 transition-all duration-300`}
            >
              <p className="flex text-xl font-extrabold font-poppins">
                {inCart ? "Added to cart" : "Add to cart"}
              </p>
              <BsCartCheck size={35} />
            </button>
            {inCart && (
              <div>
                <button>Increment</button>
                <p>{String(getItemQuantityFromCart(productId))}</p>
                <button>Decrement</button>
              </div>
            )}
            <button className="w-3/4 lg:w-2/5 flex justify-between place-items-center px-3 py-2 bg-orange-500 text-white border-2 border-gray-400 rounded-md hover:scale-105 transition-all duration-300 hover:bg-orange-600">
              <SiWish size={32} />
              <p className="flex text-xl font-extrabold font-poppins">
                Add to Wishlist
              </p>
            </button>
          </div>
        </div>
      </section>
      <section>
        <p className="font-serif font-semibold text-4xl border-b-2 border-gray-400">
          Related Products
        </p>
        <p className="font-serif">You might also like</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center">
          <div className="w-full mx-auto flex flex-col justify-center place-items-center">
            <img src={state.imgUrl} alt="" className="w-[400px]" />
            <p className="text-lg font-semibold font-serif">
              Pressure Gauge SS
            </p>
          </div>
          <div className="w-full mx-auto flex flex-col justify-center place-items-center">
            <img src={state.imgUrl} alt="" className="w-[400px]" />
            <p className="text-lg font-semibold font-serif">
              Pressure Gauge MS
            </p>
          </div>
          <div className="w-full mx-auto flex flex-col justify-center place-items-center">
            <img src={state.imgUrl} alt="" className="w-[400px]" />
            <p className="text-lg font-semibold font-serif">
              Pressure Gauge Daiphragm
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
