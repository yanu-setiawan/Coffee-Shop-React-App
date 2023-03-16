import React from "react";
import logo from "../../../assets/logos.svg";
import facebook from "../../../assets/sosmed/facebook.png";
import twitter from "../../../assets/sosmed/twitter.png";
import instagram from "../../../assets/sosmed/instagram.png";
// import Button from "../../base/Buttons";

function Footer() {
  return (
    <footer className="flex justify-between px-[10%] pt-[130px] pb-[100px]">
      <div className="left-foot-content flex flex-col gap-[22px]">
        <div className="logo-detail flex gap-3">
          <img src={logo} alt="" className="coffee" width="30" height="33" />
          <p className="font-bold flex items-center">Coffee Shop</p>
        </div>
        <p className="about-detail text-greyFont   font-medium">
          Coffee Shop is a store that sells some good <br />
          meals, and especially coffee. We provide <br />
          high quality beans
        </p>
        <div className="flex gap-4 pb-3">
          <div className="box">
            <div className="  bg-secondary relative flex p-[15px] rounded-full items-center justify-center left-[2px]"></div>
            <img
              className="absolute transform -translate-y-8"
              src={facebook}
              alt="facebook"
            />
          </div>

          <div className="box">
            <div className="  bg-secondary relative flex p-[15px] rounded-full items-center justify-center left-[2px]"></div>
            <img
              className="absolute transform -translate-y-8"
              src={twitter}
              alt="twitter"
            />
          </div>
          <div className="box">
            <div className=" bg-secondary relative flex p-[15px] rounded-full items-center justify-center left-[2px] "></div>
            <img
              className="absolute transform -translate-y-8"
              src={instagram}
              alt="instagram"
            />
          </div>
        </div>
        <p className="copyright text-[#AFB5C0;] ">©2022 CoffeeStore</p>
      </div>
      <div className="right-foot-content flex gap-5 md:gap-7 lg:gap-16 xl:gap-24 ">
        <div className="content-detail flex-col gap-3">
          <h2 className="font-bold pb-4">Product</h2>
          <ol className="flex flex-col gap-4">
            <li className=" cursor-pointer hover:text-yellow  text-greyFont">Download</li>
            <li className=" cursor-pointer hover:text-yellow  text-greyFont">Pricing</li>
            <li className=" cursor-pointer hover:text-yellow  text-greyFont">Locations</li>
            <li className=" cursor-pointer hover:text-yellow  text-greyFont">Contries</li>
            <li className=" cursor-pointer hover:text-yellow  text-greyFont">Blog</li>
          </ol>
        </div>
        <div className="content-detail">
          <h2 className="font-bold pb-4">Engage</h2>
          <ol className="flex flex-col gap-4">
            <li className=" cursor-pointer hover:text-yellow  text-greyFont">Coffee Shop ?</li>
            <li className=" cursor-pointer hover:text-yellow  text-greyFont">FAQ</li>
            <li className=" cursor-pointer hover:text-yellow  text-greyFont">About Us</li>
            <li className=" cursor-pointer hover:text-yellow  text-greyFont">Privacy Policy</li>
            <li className=" cursor-pointer hover:text-yellow  text-greyFont">Terms of Service</li>
          </ol>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
