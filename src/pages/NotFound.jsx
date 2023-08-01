import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-full w-full my-10 flex place-items-center justify-center">
      <Link to={"/"}>
        <img
          src="https://i.pinimg.com/originals/b7/e5/c7/b7e5c76406f2699a4b2470eccd2c5f1a.gif"
          alt=""
        />
      </Link>
    </div>
  );
};

export default NotFound;
