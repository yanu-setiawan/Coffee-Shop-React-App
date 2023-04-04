/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logos.svg";
import chat from "../../../assets/vector/chat.png";
// import profile from "../../../assets/profile/image1.png";
import burger from "../../../assets/vector/burger.svg";
import withNavigate from "../../../utils/wrapper/withNavigate";
import imgProf from "../../../assets/defaultProfile.png";
import { useSelector, useDispatch, usersAction } from "react-redux";
import Togle from "../../base/Togle";

function Header() {
  const [togle, setTogle] = useState(false);
  const userData = useSelector((state) => state.user.data);

  const handleTogle = () => {
    setTogle(true);
  };

  // const Togle = ()

  return (
    <>
      <header className=" bg-white z-[90] flex h-[100px] border-solid border-b-2 items-center w-full justify-around  md:justify-between md:px-9 lg:px-[1.5rem] xl:px-32">
        <div className="pointer flex gap-3 mr-32 lg:mr-12 xl:mr-[7rem] justify-center items-center">
          <div>
            <img className=" w-[30px] h-[33px] " src={logo} alt="coffee" />
          </div>

          <p className="font-bold flex items-center">Coffee Shop</p>
        </div>
        <div className="navList lg:m-auto md:hidden lg:flex hidden ">
          <ul className="flex gap-8 justify-center items-center w-max lg:flex xl:gap-[80px] text-greyFont">
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

        <div className="h-10 items-center gap-2 rounded-3xl bg-white px-3 ml-[42px] mr-4 hidden lg:flex border-2">
          <i className="fa-solid fa-magnifying-glass hidden lg:flex"></i>
          <input
            className="search w-[178px] p-1 hidden lg:flex outline-none"
            placeholder="Search"
          />
        </div>

        <div className=" gap-7 hidden lg:flex">
          <div>
            <img src={chat} alt="" />
          </div>
          <div>
            <Link to="/profile">
              <img
                className="rounded-full w-[39px] h-[39px] cursor-pointer"
                src={!userData.image ? imgProf : userData.image}
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className="burger block lg:hidden">
          <img src={burger} alt="" width="30px" height="30px" />
        </div>
      </header>
      {/* <Togle /> */}
    </>
  );
}

const NewHeader = withNavigate(Header);
export default NewHeader;
