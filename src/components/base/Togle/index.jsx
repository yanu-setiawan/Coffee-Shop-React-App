/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Togle() {
  return (
    <div className="navList lg:m-auto flex lg:hidden">
      <ul className="flex gap-8 justify-center items-center  lg:flex xl:gap-[80px] text-greyFont flex-col w-full">
        <Link to={"/"}>
          <li className=" hover:font-bold hover:text-secondary block p-1">
            Home
          </li>
        </Link>
        <Link to={"/product"}>
          <li className=" hover:font-bold hover:text-secondary block p-1">
            Product
          </li>
        </Link>
        <Link to={"/yourcart"}>
          <li className=" hover:font-bold hover:text-secondary block p-1">
            Your Cart
          </li>
        </Link>
        <Link to={"/history"}>
          <li className=" hover:font-bold hover:text-secondary block p-1">
            History
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Togle;
