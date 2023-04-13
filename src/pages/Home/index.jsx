/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "../../components/templates/NavSubLogin";
import HeaderLogin from "../../components/templates/Header";
import Footer from "../../components/templates/Footer";
import teamWork from "../../assets/Home/team-work-bg.webp";
import iconCeklis from "../../assets/Home/icon/Ceklis.svg";
import CardHome from "../../components/base/CardHome";
import hueGlobal from "../../assets/Home/Huge Global.svg";
import netflix from "../../assets/Home/partner/netflix.webp";
import reddit from "../../assets/Home/partner/Reddit.webp";
import amazon from "../../assets/Home/partner/amazon.webp";
import discord from "../../assets/Home/partner/Discord.webp";
import spotify from "../../assets/Home/partner/Spotify.webp";
import leftIcon from "../../assets/Home/icon/left.svg";
import rightIcon from "../../assets/Home/icon/Right.svg";
import iconStar from "../../assets/Home/icon/star.svg";
import user1 from "../../assets/profile/user.png";
import user2 from "../../assets/profile/user2.png";
import user3 from "../../assets/profile/user3.png";
// import withSearchParams from "../../utils/wrapper/withSearchParams";
// import withNavigate from "../../utils/wrapper/withNavigate";
import { useSelector } from "react-redux";
import Loader from "../../components/base/Loader";

// import css from '../../styles/Home.css'

function Home() {
  const users = useSelector((state) => state.user.data.token);
  useEffect(() => {
    document.title = "Coffe Shop - Home Page";
  }, []);
  // console.log(users);

  return (
    <>
      {users ? <HeaderLogin /> : <Header />}
      <main className="font-rubik">
        <section className=" bg-homeHeader bg-center bg-cover bg-no-repeat min-h-[90vh]">
          <div className="text-white min-h-[90vh]">
            <div className="font-bold flex flex-col justify-center pt-16 px-16 lg:h-[80vh] lg:pt-0 lg:pl-[10%] gap-7">
              <h1 className="text-3xl mb-4 md:text-[4.25rem] md:leading-[4rem] lg:text-6xl">
                Start Your Day with <br /> Coffee and Good Meals
              </h1>
              <p className="text-base mb-12">
                We provide high quality beans, good taste, and healthy <br />{" "}
                meals made by love just for you. Start your day with us <br />{" "}
                for a bigger smile!
              </p>
              <button className="pointer py-4 px-8 bg-yellow w-[60%] self-center rounded-lg text-brown-cs text-xl md:w-[40%] lg:w-[30%] lg:self-start">
                Get Started
              </button>
            </div>
          </div>
        </section>
        <section className="branding">
          <div className="container-branding">
            <div className="box-info relative min-h-[155px] flex justify-center items-center lg:p-12">
              <div
                className="flex bg-white w-[80%] absolute top-[-30%] px-8 py-4 rounded-xl lg:w-[70%] lg:top-[-50%] justify-center items-center"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                }}
              >
                <div className="container-staf flex-1 flex flex-col justify-center items-center lg:flex-row lg:gap-4 lg:py-8 ">
                  <div className="bg-yellow w-[50px] h-[50px] rounded-full bg-icon-contact bg-center bg-no-repeat flex"></div>
                  <div className="text-center">
                    <h3 className="font-bold mt-1 lg:text-2xl">90+</h3>
                    <p className="text-grey-custom text-base">Staff</p>
                  </div>
                </div>
                <div className="container-staf flex-1 flex flex-col justify-center items-center lg:flex-row lg:gap-4 lg:py-8 border-x-2 h-32 ">
                  <div className="bg-yellow w-[50px] h-[50px] rounded-full bg-icon-location bg-center bg-no-repeat flex"></div>
                  <div className="text-center">
                    <h3 className="font-bold mt-1 lg:text-2xl">30+</h3>
                    <p className="text-grey-custom text-base">Stores</p>
                  </div>
                </div>
                <div className="container-staf flex-1 flex flex-col justify-center items-center lg:flex-row lg:gap-4 lg:py-8 ">
                  <div className="bg-yellow w-[50px] h-[50px] rounded-full bg-icon-heart bg-center bg-no-repeat flex"></div>
                  <div className="text-center">
                    <h3 className="font-bold mt-1 lg:text-2xl">800+</h3>
                    <p className="text-grey-custom text-base">Customers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="body-branding">
              <div className="flex flex-col justify-center items-center px-6 text-grey-custom mb-20 md:flex-row md:gap-4 md:px-8 lg:px-20 xl:gap-12">
                <div className="logo-branding flex items-center justify-center">
                  <img
                    src={teamWork}
                    alt="logo-branding"
                    width="100%"
                    height="auto"
                  />
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-dark-blue-cs mb-4">
                      We Provide Good Coffee <br /> and Healthy Meals
                    </h2>
                    <p className="mb-4 lg:mb-0">
                      You can explore the menu that we provide with fun and{" "}
                      <br /> have their own taste and make your day better.
                    </p>
                    <div>
                      <div className="flex flex-col gap-4 mb-12">
                        <div className="flex gap-4">
                          <img
                            src={iconCeklis}
                            alt="icon-ceklis"
                            width="20"
                            height="auto"
                          />
                          <p>High quality beans</p>
                        </div>
                        <div className="flex gap-4">
                          <img
                            src={iconCeklis}
                            alt="icon-ceklis"
                            width="20"
                            height="auto"
                          />
                          <p>Healthy meals, you can request the ingredients</p>
                        </div>
                        <div className="flex gap-4">
                          <img
                            src={iconCeklis}
                            alt="icon-ceklis"
                            width="20"
                            height="auto"
                          />
                          <p>
                            Chat with our staff to get better experience for
                            ordering
                          </p>
                        </div>
                        <div className="flex gap-4">
                          <img
                            src={iconCeklis}
                            alt="icon-ceklis"
                            width="20"
                            height="auto"
                          />
                          <p>
                            Free member card with a minimum purchase of IDR
                            200.000.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product mb-20">
          <div className="container-product px-6 text-grey-custom md:px-8 lg:px-20">
            <div className="product-header">
              <h2 className="text-2xl font-bold mb-4 text-dark-blue-cs text-center">
                Here is People s Favorite
              </h2>
              <p className="text-base mb-28 text-center">
                Lets choose and have a bit taste of poeples favorite. It might
                be yours too!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <CardHome />
              <CardHome />
              <CardHome />
            </div>
          </div>
        </section>
        <section className="map mb-20 px-6 md:px-8 lg:px-20 ">
          <div className="container-map">
            <div className="text-center">
              <h2 className="font-bold text-2xl text-dark-blue-cs mb-3">
                Visit Our Store in the <br /> Spot on the Map Below
              </h2>
              <p className="text-grey-custom mb-20">
                See our store in every city on the spot and spen your good day
                there. See <br className="hidden" /> you soon!
              </p>
            </div>
            <div className="px-6">
              <img src={hueGlobal} alt="maps" width="100%" height="auto" />
            </div>
          </div>
        </section>
        <section className="partner mb-20 px-6 md:px-8 lg:PX-20 mt-10">
          <div className="">
            <div className="header-partner">
              <h2 className="text-center text-dark-blue-cs text-[35px] font-medium mb-10">
                Our Partner
              </h2>
            </div>
            <div className="w-full gap-14 flex-wrap grayscale-[100%] flex flex-col md:flex-row sm:grid sm:grid-cols-2 md:flex justify-center justify-items-center items-center mb-12">
              <div className="our-partner-img w-48 ">
                <img src={netflix} alt="" className="w-full" />
              </div>
              <div className="our-partner-img w-48">
                <img src={reddit} alt="" className="w-full" />
              </div>
              <div className="our-partner-img w-48">
                <img src={amazon} alt="" className="w-full" />
              </div>
              <div className="our-partner-img w-48">
                <img src={discord} alt="" className="w-full" />
              </div>
              <div className="our-partner-img w-48">
                <img src={spotify} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </section>
        <section className="customer text-grey-custom px-6 md:px-8 lg:px-20 mt-[10.5rem]">
          {/* <!-- COMENTARY CUSTOMER CONTENT --> */}
          <h3 className="font-medium text-2xl md:text-4xl md:leading-[50px] text-center">
            Loved by Thousands of Happy Customer
          </h3>
          <p className="text-greydark text-sm md:text-base leading-6 md:leading-7 my-4 md:my-6 text-center">
            These are the stories of our customers who have visited us with
            great pleasure.
          </p>
          {/* <!-- COMMENTARY CONTAINER --> */}
          <div className="w-full flex flex-col md:flex-row gap-3 2xl:gap-14 pb-4 overflow-x-scroll xl:overflow-hidden">
            {/* <!-- CARD COMMENT-1 --> */}
            <div className="card-comment flex flex-col p-4 sm:p-7 w-full sm:min-w-[400px] max-h-[230px] border-2 rounded-xl border-grey">
              <div className="flex w-full gap-3 mb-6">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden">
                  <img src={user1} alt="" />
                </div>
                <div className="">
                  <h4 className="font-medium md:text-lg">Viezh Robert</h4>
                  <h5 className="text-xs md:text-sm text-grey">
                    Warsaw, Poland
                  </h5>
                </div>
                <div className="ml-auto flex gap-2 items-center">
                  <p className="font-medium">4.5</p>
                  <div className="image-star">
                    <img
                      src={iconStar}
                      alt="icon-star"
                      width="20"
                      height="auto"
                    />
                  </div>
                </div>
              </div>
              <p className="text-xs md:text-base">
                “Wow... I am very happy to spend my whole day here. the Wi-fi is
                good, and the coffee and meals tho. I like it here!! Very
                recommended!
              </p>
            </div>
            {/* <!-- CARD COMMENT-2 --> */}
            <div className="card-comment hidden md:flex flex-col p-4 sm:p-7 w-full sm:min-w-[400px] max-h-[230px] border-2 rounded-xl border-grey">
              <div className="flex w-full gap-3 mb-6">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden">
                  <img src={user2} alt="" />
                </div>
                <div className="">
                  <h4 className="font-medium md:text-lg">Yessica Christy</h4>
                  <h5 className="text-xs md:text-sm text-grey">
                    Shanxi, China
                  </h5>
                </div>
                <div className="ml-auto flex gap-2 items-center">
                  <p className="font-medium">4.5</p>
                  <div className="image-star">
                    <img
                      src={iconStar}
                      alt="icon-star"
                      width="20"
                      height="auto"
                    />
                  </div>
                </div>
              </div>
              <p className="text-xs md:text-base">
                “I like it because I like to travel far and still can make my
                day better just by drinking their Hazelnut Latte
              </p>
            </div>
            {/* <!-- CARD COMMENT-3 --> */}
            <div className="card-comment hidden md:flex flex-col p-4 sm:p-7 w-full sm:min-w-[400px] max-h-[230px] border-2 rounded-xl border-grey">
              <div className="flex w-full gap-3 mb-6">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden">
                  <img src={user3} alt="" />
                </div>
                <div className="">
                  <h4 className="font-medium md:text-lg">Kim Young Jou</h4>
                  <h5 className="text-xs md:text-sm text-grey">
                    Seoul, South Korea
                  </h5>
                </div>
                <div className="ml-auto flex gap-2 items-center">
                  <p className="font-medium">4.5</p>
                  <div className="image-star">
                    <img
                      src={iconStar}
                      alt="icon-star"
                      width="20"
                      height="auto"
                    />
                  </div>
                </div>
              </div>
              <p className="text-xs md:text-base">
                “This is very unusual for my taste, I haven’t liked coffee
                before but their coffee is the best! and yup, you have to order
                the chicken wings, the best in town!
              </p>
            </div>
          </div>
          <div className="footer-customer px-4 mb-14">
            <div className="flex">
              <div className="flex justify-start mt-12 gap-4 w-full">
                <div className="flex gap-4 flex-1">
                  <div className="w-[20px] h-[20px] bg-secondary rounded-full border-2 border-solid border-secondary"></div>
                  <div className="w-[20px] h-[20px] rounded-full border-2 border-solid bg-[#DDE0E4]"></div>
                  <div className="w-[20px] h-[20px] rounded-full border-2 border-solid bg-[#DDE0E4]"></div>
                  <div className="w-[20px] h-[20px] rounded-full border-2 border-solid bg-[#DDE0E4]"></div>
                </div>
                <div className="flex-1 flex justify-end gap-8">
                  <button className="w-[40px] h-[40px] bg-white border-2 border-solid border-secondary flex justify-center items-center rounded-full">
                    <img src={leftIcon} alt="" />
                  </button>
                  <button className="w-[40px] h-[40px] bg-secondary flex justify-center items-center rounded-full">
                    <img src={rightIcon} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- [END] COMENTARY CUSTOMER CONTENT --> */}
          <section className="h-[15rem] lg:flex-[1] relative flex justify-center items-center">
            <section
              className="absolute top-[40%] p-16 flex flex-col justify-center items-center py-8 px-4 w-[90%] m-auto bg-white rounded-2xl gap-2 md:flex-row md:py-12 md:px-12 lg:py-12 lg:px-12 lg:w-[90%]"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
              }}
            >
              <div className="flex-1 flex flex-col gap-2">
                <h2 className="title font-bold card-title md:text-[20px] lg:text-[35px] lg:font-bold lg:text-dark-blue-cs">
                  Check our promo <br className="hidden lg:block" /> today!
                </h2>
                <p className="description md:text-base card-description lg:text-grey-custom lg:font-semibold">
                  lets join with our member and enjoy the deals.
                </p>
              </div>
              <button className="py-3 px-8 bg-yellow rounded-lg text-brown-cs font-bold hover:bg-[#a18818] hover:text-white">
                Create Now
              </button>
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
// export default Home;
