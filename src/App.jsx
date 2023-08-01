import { createContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import History from "./pages/History";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OurServices from "./pages/OurServices";
import Product from "./pages/Product";
import Products from "./pages/Products";

const cartContext = new createContext({});

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("Cart Changed!", cart);
  }, [cart]);
  return (
    <>
      <Navbar />
      <div className="min-h-[32.5vh]">
        <cartContext.Provider value={{ cart, setCart }}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/about-us"} element={<AboutUs />} />
            <Route path={"/history"} element={<History />} />
            <Route path={"/our-services"} element={<OurServices />} />

            <Route path={"/products"} element={<Products />} />
            <Route
              path={"/products/:category/:productId"}
              element={<Product />}
            />

            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </cartContext.Provider>
      </div>
      <Footer />
    </>
  );
}

export default App;
export { cartContext };
