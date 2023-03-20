import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logos.svg";
import Burger from "../../../assets/vector/burger.svg";
import WithNavigate from "../../../utils/wrapper/withNavigate";

function Navbar() {
  return (
    <header className="flex h-[100px]  border-solid border-b-2 items-center w-full justify-around py-[20px] md:justify-between md:px-9 lg:px-14 xl:px-32">
      <div className="pointer flex gap-3 mr-32 lg:mr-12">
        <a href="/index.html">
          <img className=" w-[30px] h-[33px] " src={Logo} alt="coffee" />
        </a>
        <p className="font-bold flex items-center">Coffee Shop</p>
      </div>
      <div className="navList lg:m-auto md:hidden lg:flex hidden">
        <ul className="flex gap-8 justify-center items-center w-max lg:flex xl:gap-[50px]  text-greyFont">
          <Link to={"/"}>
            <li className=" hover:font-bold hover:text-secondary block p-1">
              Home
            </li>
          </Link>
          <Link to={"/product"}>
            <li className=" hover:font-bold hover:text-secondary block p-3">
              Product
            </li>
          </Link>
          <Link to={"#"}>
            <li className=" hover:font-bold hover:text-secondary block p-3">
              Your Cart
            </li>
          </Link>
          <Link to={"/history"}>
            <li className=" hover:font-bold hover:text-secondary block p-3">
              History
            </li>
          </Link>
        </ul>
      </div>

      <div className="hidden gap-[40px] md:hidden lg:flex xl:flex ml-5">
        <Link
          className=" text-[18px] font-medium text-black flex items-center justify-center"
          to={"/login"}
        >
          Login
        </Link>
        <Link to={"/register"}>
          <button className="flex items-center font-medium justify-center w-[150px] h-[45px] bg-yellow text-secondary border-none rounded-[50px] hover:bg-[#fec85c]">
            Sign Up
          </button>
        </Link>
      </div>

      <div className="burger block lg:hidden xl:hidden">
        <img src={Burger} alt="" width="30px" height="30px" />
      </div>
    </header>
  );
}

const NewNavbar = WithNavigate(Navbar);
export default NewNavbar;
