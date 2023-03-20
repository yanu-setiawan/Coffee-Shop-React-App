/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import WithNavigate from "../../utils/wrapper/withNavigate";
// import Background from "../../assets/background/BgHome.webp";
import Header from "../../components/templates/NavSubLogin";
import Footer from "../../components/templates/Footer";
import Cust from "../../assets/vector/cust.png";
import Loc from "../../assets/vector/mapvector.png";
import Prof from "../../assets/vector/profilevector.png";
import Cheklist from "../../assets/vector/cheklist.svg";
import Peta from "../../assets/img/peta.webp";
import Team from "../../assets/img/teamwork.webp";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* <main>
            <div className="homeHeader h-[645px] w-full bg-center bg-cover bg-Home" >
            </div>
          </main> */}
        <section className="top-container bg-homeHeader bg-cover object-contain bg-center w-full h-[41.33rem] ">
          <div className="description pt-20 ml-[12%] ">
            <div className="title text-[50px] font-bold text-white mb-5 w-full">
              <p>
                Start Your Day with <br />
                Coffee and Good Meals
              </p>
            </div>
            <div className="words text-xl font-bold text-white mb-5 lg:mb-8">
              We provide high quality beans, good taste, and healthy <br />
              meals made by love just for you. Start your day with us <br />
              for a bigger smile!
            </div>
            <button className="btn-started w-[15.6rem] bg-yellow text-secondary border rounded-[10px] font-bold cursor-pointer border-none h-[3.7rem]">
              Get Started
            </button>
          </div>
          <section className="flying-properties flex items-center justify-center relative w-full">
            <div className="card-top absolute flex items-center justify-between p-12 w-[76%] text-Darkblue bg-white z-10 h-[12.5rem] top-[7.7rem] rounded-[10px] mb-0 shadow-xl shadow-[#c4c4c4ab]">
              <div className="flying-content flex gap-9 h-32 w-[33.333%] justify-center items-center">
                <div className="back-img bg-yellow h-14 w-14 flex rounded-full justify-center items-center">
                  <div className="icon">
                    <img src={Prof} alt="" />
                  </div>
                </div>
                <div className="small-text">
                  <p className="flying-text text-[1.6rem] font-bold mb-1">
                    90+
                  </p>
                  <p className="flying-name text-xl">Staff</p>
                </div>
              </div>
              <div className=" border-x-2 border-[#dddddd]  flex gap-9 h-32 w-[33.333%] justify-center items-center">
                <div className="back-img bg-yellow h-14 w-14 flex rounded-full justify-center items-center">
                  <div className="icon">
                    <img src={Loc} alt="" />
                  </div>
                </div>
                <div className="small-text">
                  <p className="flying-text text-[1.6rem] font-bold mb-1">
                    30+
                  </p>
                  <p className="flying-name text-xl">Stores</p>
                </div>
              </div>
              <div className="flying-content flex gap-9 h-32 w-[33.333%] justify-center items-center">
                <div className="back-img bg-yellow h-14 w-14 flex rounded-full justify-center items-center">
                  <div className="icon">
                    <img src={Cust} alt="" />
                  </div>
                </div>
                <div className="small-text">
                  <p className="flying-text text-[1.6rem] font-bold mb-1">
                    800+
                  </p>
                  <p className="flying-name text-xl">Customers</p>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="container-fluid flex flex-row pt-[13%] px-[5%] gap-[70px] justify-center items-center">
          <div className="content-team">
            <img src={Team} alt="" height="457" width="573" />
          </div>
          <div className="sides-content">
            <div className="text">
              <p className="head-text">
                We Provide Good Coffee <br />
                and Healthy Meals
              </p>
              <p className="middle-text">
                You can explore the menu that we provide with fun and <br />
                have their own taste and make your day better.
              </p>
              <div className="text-list">
                <ul>
                  <li>
                    <img src={Cheklist} alt="" />
                    High quality beans
                  </li>
                  <li>
                    <img src={Cheklist} alt="" />
                    Healthy meals, you can request the ingredients
                  </li>
                  <li>
                    <img src={Cheklist} alt="" />
                    Chat with our staff to get better experience for ordering
                  </li>
                  <li>
                    <img src={Cheklist} alt="" />
                    Free member card with a minimum purchase of IDR 200.000.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="favorite">
          <div className="head-favorite">
            <div className="head-text">Here is People’s Favorite</div>
            <div className="middle-text">
              Let’s choose and have a bit taste of poeple’s favorite. It might
              be yours too!
            </div>
          </div>
          <div className="favorite-menu">
            <div className="card-border">
              <div className="image-content">
                <img src="/assets/food4.png" alt="" />
              </div>

              <div className="name">Hazelnut Latte</div>
              <div className="list-favorite">
                <ul>
                  <li>
                    <img src="" alt="" />
                    HazelnutSyrup
                  </li>
                  <li>
                    <img src="" alt="" />
                    Wanilla Whipped Cream
                  </li>
                  <li>
                    <img src="" alt="" /> Ice / Hot
                  </li>
                  <li>
                    <img src="" alt="" />
                    Sliced Banana on Top
                  </li>
                </ul>
              </div>
              <div className="box-price1">
                <div className="price">IDR.25.000</div>
                <button className="btn-select">Order Now</button>
              </div>
            </div>

            <div className="card-border">
              <div className="image-content">
                <img src="" alt="" />
              </div>
              <div className="name">Pinky Promise</div>
              <div className="list-favorite">
                <ul>
                  <li>
                    <img src="" alt="" />1 Shot of Coffee
                  </li>
                  <li>
                    <img src="" alt="" />
                    Vanilla Whipped Cream
                  </li>
                  <li>
                    <img src="" alt="" /> Chocolate Biscuits
                  </li>
                  <li>
                    <img src="" alt="" /> Strawberry Syrup
                  </li>
                  <li>
                    <img src="" alt="" /> Sliced strawberry on Top
                  </li>
                </ul>
              </div>
              <div className="box-price2">
                <div className="price">IDR.30.000</div>
                <button className="btn-select">Select</button>
              </div>
            </div>

            <div className="card-on">
              <div className="image-content">
                <img src="" alt="" />
              </div>
              <div className="name">Chicken Wings</div>
              <div className="list-favorite">
                <ul>
                  <li>
                    <img src="" alt="" />
                    Wings
                  </li>
                  <li>
                    <img src="" alt="" />
                    Drum Sticks Cream
                  </li>
                  <li>
                    <img src="" alt="" />
                    Mayonaise and Lemon
                  </li>
                  <li>
                    <img src="" alt="" />
                    Hot Fried
                  </li>
                  <li>
                    <img src="" alt="" /> Secret Recipe
                  </li>
                  <li>
                    <img src="" alt="" /> Buy 1 Get 1 only for Dine in
                  </li>
                </ul>
              </div>
              <div className="box-price3">
                <div className="price">IDR.40.000</div>
                <button className="btn-on">Order Now</button>
              </div>
            </div>
          </div>
        </section>
        <section className="visit">
          <div className="text-visit">
            <p className="head-text">
              Visit Our Store in the <br />
              Spot on the Map Below
            </p>
            <p className="middle-text">
              See our store in every city on the spot and spen your good day
              there. See <br />
              you soon!
            </p>
          </div>
          <div className="img-visit">
            <img src="" alt="" />
          </div>
        </section>
        <section className="partner">
          <div className="text">
            <p className="head-text">Our Partner</p>
          </div>
          <div className="img-partner">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </section>
        <section className="comment">
          <div className="text-comment">
            <p className="head-text">
              Loved by Thousands of <br />
              Happy Customer
            </p>
            <p className="middle-text">
              These are the stories of our customers who have visited us with
              great
              <br />
              pleasure.
            </p>
          </div>

          <div className="wrap-comment">
            <div className="card-customer1">
              <div className="top-content">
                <div className="img-name">
                  <div className="img-customer">
                    <img src="/assets/Ellipse 175.png" alt="" />
                  </div>
                  <div className="name-address">
                    <p className="name-cust">Viezh Robert</p>
                    <p className="address">Warsaw, Poland</p>
                  </div>
                </div>
                <div className="star">
                  <p>4.5</p>
                  <img src="star.png" alt="" height="13px" width="13px" />
                </div>
              </div>
              <div className="detail-comment">
                <p>
                  “Wow... I am very happy to spend my whole
                  <br />
                  day here. the Wi-fi is good,and the coffee and meals tho. I
                  like it here!! Very recommended!
                </p>
              </div>
            </div>

            <div className="card-customer">
              <div className="top-content">
                <div className="img-name">
                  <div className="img-customer">
                    <img src="user" alt="" />
                  </div>
                  <div className="name-address">
                    <p className="name-cust">Yessica Christy</p>
                    <p className="address">Shanxi, China</p>
                  </div>
                </div>
                <div className="star">
                  <p>4.5</p>
                  <img src="star" alt="" height="13px" width="13px" />
                </div>
              </div>
              <div className="detail-comment">
                <p>
                  “I like it because I like to travel far and still can make my
                  day better just by drinking their Hazelnut Latte
                </p>
              </div>
            </div>

            <div className="card-customer" id="hidden">
              <div className="top-content">
                <div className="img-name">
                  <div className="img-customer">
                    <img src="user" alt="" />
                  </div>
                  <div className="name-address">
                    <p className="name-cust">Kim Young Jou</p>
                    <p className="address">Seoul,Korea</p>
                  </div>
                </div>
                <div className="star">
                  <p>4.5</p>
                  <img src="star" alt="" height="13px" width="13px" />
                </div>
              </div>
              <div className="detail-comment">
                <p>
                  “I like it because I like to travel far and still can make my
                  day better just by drinking their Hazelnut Latte
                </p>
              </div>
            </div>
          </div>

          <div className="next-content">
            <div className="left-next">
              <img src="list" alt="" />
            </div>
            <div className="right-next">
              <div className="left">
                <img src="/assets/left.png" alt="" />
              </div>
              <div className="right">
                <img src="/assets/right.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="promo">
          <div className="card">
            <div className="text">
              <h2 className="promo-title">
                Check our promo <br />
                today!
              </h2>
              <p className="promo-description">
                Let's see the deals and pick yours!
              </p>
            </div>
            <button className="btn btn-see">See Promo</button>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

const NewHome = WithNavigate(Home);
export default NewHome;
