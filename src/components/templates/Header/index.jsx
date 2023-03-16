import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logos.svg";
import chat from "../../../assets/vector/chat.png";
import profile from "../../../assets/profile/image1.png";
import burger from "../../../assets/vector/burger.svg";
import withNavigate from "../../../utils/wrapper/withNavigate";

function Header() {
    return (
        <header
        className="flex lg:h-20  border-solid border-b-2 items-center w-full justify-around py-[20px] md:justify-between md:px-9 lg:px-14 xl:px-32"
      >
        <div className="pointer flex gap-3 mr-32 lg:mr-12 xl:mr-[7rem]">
          <a href="/index.html">
            <img className=" w-[30px] h-[33px] " src={logo} alt="coffee" />
          </a>
          <p className="font-bold flex items-center">Coffee Shop</p>
        </div>
        <div className="navList lg:m-auto md:hidden lg:flex hidden">
          <ul className="flex gap-8 justify-center items-center w-max lg:flex xl:gap-[50px]  text-greyFont">
          <Link to={"/"}>
              <li className=" hover:font-bold hover:text-secondary block p-2">Home</li>
            </Link>
            <Link to={"/product"}>
              <li className=" hover:font-bold hover:text-secondary block p-2">Product</li>
            </Link>
            <Link to={"#"}>
              <li className=" hover:font-bold hover:text-secondary block p-2">Your Cart</li>
            </Link>
            <Link to={"/history"}>
              <li className=" hover:font-bold hover:text-secondary block p-2">History</li>
            </Link>
          </ul>
        </div>
  
        <div
          className="h-10 items-center gap-2 rounded-3xl bg-white px-3 ml-[42px] mr-4 hidden lg:flex border-2"
        >
          <i className="fa-solid fa-magnifying-glass hidden lg:flex"></i>
          <input
            className="search w-[178px] p-1 hidden lg:flex outline-none"
            placeholder="Search"
          />
        </div>
  
        <div className=" gap-7 hidden lg:flex">
          <a href="/product/product.html"
            ><img src={chat} alt=""
          /></a>
          <a href="/profile/profile.html"
            ><img className="rounded-full w-[30px] h-[30px]" src= {profile} alt=""
          /></a>
        </div>
  
        <div className="burger block lg:hidden">
          <img src={burger} alt="" width="30px" height="30px" />
        </div>
      </header>
    );
  }
  
  const NewHeader = withNavigate(Header);
  export default NewHeader;
  