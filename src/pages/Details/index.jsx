/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/templates/Header";
import Footer from "../../components/templates/Footer";
import image from "../../assets/menu/coffe detail.png";
import plus from "../../assets/vector/+.png";
import minus from "../../assets/vector/-.png";
import axios from "axios";
import { getProductsDetails } from "../../utils/https/products";
import { counterAction } from "../../Redux/slices/cart";
import Loader from "../../components/base/Loader";
import ModalMsg from "../../components/base/Modal/ModalMsg";
import ModalToCart from "../../components/base/Modal/ModalToCart";
import DataNotFound from "../../components/base/DataNotFound";
import { currencyFormatter } from "../../helpers/currencyFormater";

function Details() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const getProductById = (id) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOST}/products/${id}`)
      .then(({ data }) => {
        setProduct(data.data[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductById(id);
    document.title = "Coffee Shop - Product Details";
  }, [id]);

  const controller = React.useMemo(() => new AbortController(), []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalCart, setIsModalCart] = useState(false);

  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState(1);
  const selectedDelivery = useSelector((state) => state.counter.delivery);
  const notes = useSelector((state) => state.counter.notes);

  const changeSize = (event) => {
    setSelectedSize(event.target.value);
    console.log(event.target.value);
  };
  const noteHandler = (event) => {
    dispatch(counterAction.notes(event.target.value));
  };
  const changeDelivery = (event) => {
    // setSelectedDelivery(event.target.value);
    // console.log(selectedDelivery);
    dispatch(counterAction.deliveryMethod(event.target.value));
  };
  const plusQty = () => {
    const newQty = qty + 1;
    setQty(newQty);
  };
  const minQty = () => {
    if (qty === 0) return;
    const newQty = qty - 1;
    setQty(newQty);
  };

  const addtoCartHandler = () => {
    const subtotal = product.price * qty;
    const img = product.image;
    const name_product = product.name_product;
    // console.log(prodName);
    const cart = {
      product_id: parseInt(id),
      img,
      name_product,
      size_id: parseInt(selectedSize),
      qty,
      subtotal,
    };
    dispatch(counterAction.addtoCart(cart));
    setIsModalCart(true);
  };

  const checkoutHandler = () => {
    if (selectedDelivery.length < 1) return setIsModalOpen(true);
    addtoCartHandler();
    navigate("/yourcart");
  };

  const handleCloseCart = () => {
    setIsModalCart(false);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // if (!product){}
  return (
    <>
      <Header title="product" />

      {/* <div className="w-full flex h-auto mt-14 md:mt-28">
        <DataNotFound />
      </div> */}

      <main className="bg-abu inset-0 pb-[270px]">
        <section className="title pl-[10%] pt-12 text-xl">
          <p>
            Favorite & Promo
            <span className="font-bold text-secondary">
              {" "}
              &gt; {product.name_product}
            </span>
          </p>
        </section>
        <section className="container flex flex-col justify-center items-center gap-14 lg:flex-row  inset-0 px-[5%] xl:pl-[10%] mx-auto">
          <div className="left-content mt-16 justify-center items-center flex-col flex mb-20 ">
            <div className="box-coffee flex flex-col justify-center items-center">
              <div className="img-coffee mb-11">
                <img
                  className="rounded-full  xl:w-[400px] xl:h-[400px]"
                  src={product.image || null}
                  alt=""
                />
              </div>
              <div className="name-price  items-center text-center mb-14 flex flex-col justify-center ">
                <p className="name text-5xl font-black font-Poppins mb-3">
                  {product.name_product || null}
                </p>
                <p className="price font-medium text-3xl font-Poppins ">
                  {`IDR. ${currencyFormatter(product?.price)}` || 0}
                </p>
              </div>
              <div className="left-button flex flex-col gap-5 lg:mt-[5%]">
                <button
                  onClick={addtoCartHandler}
                  className="w-[380px] h-[85px] bg-secondary text-white text-[25px] font-bold flex justify-center items-center rounded-[20px] cursor-pointer"
                >
                  Add to Cart
                </button>
                <ModalToCart
                  msg={product.name_product}
                  isOpen={isModalCart}
                  onClose={handleCloseCart}
                />
                <button className="w-[380px] h-[85px] bg-yellow text-secondary text-[25px] font-bold flex justify-center items-center rounded-[20px] cursor-pointer">
                  Ask a Staff
                </button>
              </div>
            </div>
          </div>
          <div className="right-content flex flex-col justify-center items-center w-full   xl:mr-[-5%]">
            <div className="description-card w-fit h-[635px] bg-white p-11 xl:pt-[81px] xl:px-[84px] xl:pb-[65px]  relative rounded-[20px] xl:w-[639px] ">
              <div className="delivery text-[23px]  text-secondary mb-6 md:text-[26px]">
                <p>
                  Delivery only on .
                  <span className="font-bold">
                    Monday to <br />
                    friday
                  </span>
                  . at <span className="font-bold">1 - 7 pm</span>
                </p>
              </div>
              <div className="text-coffee text-secondary text-[18px] mb-6 md:text-[25px]">
                Cold brewing is a method of <br />
                brewing that combines ground <br />
                coffee and cool water and uses <br />
                time instead of heat to extract the <br />
                flavor. It is brewed in small batches <br />
                and steeped for as long as <br />
                48 hours.
              </div>
              <div className="title-size ">
                <p className="text-[25px] font-bold text-center">
                  Choose a size
                </p>
              </div>
              <div className="container-choose-size">
                <div className="choose-size flex p-[1.5rem] justify-evenly">
                  <label
                    htmlFor="r"
                    className="flex items-center cursor-pointer text-2xl font-extrabold w-12 h-12 rounded-full bg-yellow justify-center relative "
                  >
                    <input
                      type="radio"
                      name="size"
                      id="r"
                      className=" appearance-none"
                      value={1}
                      onChange={changeSize}
                    />
                    R
                    <span className="absolute border-0 rounded-full h-12 w-12 checked:border-4 border-secondary checked:block checked:border-secondary "></span>
                  </label>
                  <label
                    htmlFor="l"
                    className="flex items-center cursor-pointer text-2xl font-extrabold w-12 h-12 rounded-full bg-yellow justify-center relative "
                  >
                    <input
                      type="radio"
                      name="size"
                      value={2}
                      id="l"
                      onChange={changeSize}
                      className="appearance-none"
                    />
                    L
                    <span className="absolute border-0 rounded-full h-12 w-12 checked:border-4 border-secondary checked:block checked:border-secondary "></span>
                  </label>
                  <label
                    htmlFor="xl"
                    className="flex items-center cursor-pointer text-2xl font-extrabold w-12 h-12 rounded-full bg-yellow justify-center relative "
                  >
                    <input
                      type="radio"
                      name="size"
                      id="xl"
                      value={3}
                      onChange={changeSize}
                      className="appearance-none"
                    />
                    XL
                    <span className="absolute border-0 rounded-full h-12 w-12 checked:border-4 border-secondary checked:block checked:border-secondary "></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="box-methods flex justify-center items-center flex-col mt-[50px] gap-3">
              <div className="head-methods font-bold text-xl text-center flex justify-center items-center">
                <p>Choose Delivery Methods</p>
              </div>
              <div className="set-methods flex justify-center items-center p-3 flex-wrap">
                <div className="input-radio flex gap-6 justify-center items-center ">
                  <input
                    type="radio"
                    id="dine"
                    name="delivery-method"
                    className="checked: bg-secondary"
                    value={1}
                    checked={selectedDelivery == 1}
                    onChange={changeDelivery}
                  />
                  <label
                    htmlFor="dine"
                    className=" px-4 py-3 text-[#9f9f9f] border-2 border-solid flex justify-center items-center bg-white cursor-pointer text-xl checked:bg-secondary w-28  rounded-[10px] text-center"
                  >
                    Dine In
                  </label>
                  <input
                    type="radio"
                    id="door"
                    name="delivery-method"
                    onChange={changeDelivery}
                    checked={selectedDelivery == 2}
                    value={2}
                  />
                  <label
                    htmlFor="door"
                    className=" px-4 py-3 text-[#9f9f9f] border-2 border-solid flex justify-center items-center bg-white cursor-pointer text-xl checked:bg-secondary w-28  rounded-[10px] text-center md:w-[169px]"
                  >
                    Door Delivery
                  </label>
                  <input
                    type="radio"
                    id="pick"
                    name="delivery-method"
                    value={3}
                    onChange={changeDelivery}
                    checked={selectedDelivery == 3}
                  />
                  <label
                    htmlFor="pick"
                    className=" px-4 py-3 text-[#9f9f9f] border-2 border-solid flex justify-center items-center bg-white cursor-pointer text-xl checked:bg-secondary w-28  rounded-[10px] text-center"
                  >
                    Pick Up
                  </label>
                </div>
              </div>
              <div className="set-time">
                <div className="form-input flex gap-2 justify-center items-center">
                  <label>Set time :</label>
                  <input
                    id="time"
                    value={notes}
                    onChange={noteHandler}
                    type="text"
                    placeholder="Enter the time you’ll arrived"
                    className="p-3 rounded-[12px] bg-abu outline-none border-b-2 border-solid "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="checkout relative flex justify-between items-center ">
          <div className="card flex flex-col md:flex-row w-4/5 rounded-[20px] absolute justify-between items-center top-[35px] md:top-[175px] left-[10%] gap-8 md:gap-12">
            <div className="  bg-white flex justify-between h-[90px] p-4 w-full md:h-[8.5rem] lg:h-[10.5rem] md:p-[1rem] lg:p-11 rounded-[20px] items-center shadow-xl">
              <div className="product-coffee flex gap-[1.5rem] items-center ">
                <div className="img-product">
                  <img
                    className="rounded-full md:w-24 md:h-24"
                    src={product.image}
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div className="total-size text-xs ">
                  <div className="total-name text-xs font-bold ">
                    <p className=" text-[15px]  md:text-[23px] md:mb-4">
                      {product.name_product || null}
                    </p>
                  </div>
                  <p className="sizet text-[10px] md:text-[23px] md:leading-6">
                    x{qty} (
                    {selectedSize == 3
                      ? "Extra Large"
                      : selectedSize == 2
                      ? "Large"
                      : "Regular"}
                    )
                  </p>
                </div>
              </div>
              <div className="add-amount flex justify-center items-center gap-3">
                <button
                  onClick={minQty}
                  className="minus flex bg-[#E7AA36] w-7 h-7 md:w-[40px] md:h-[40px] rounded-full justify-center items-center cursor-pointer"
                >
                  {/* <img src={minus} alt="" width="10" height="10" /> */}
                  <i className="bi bi-dash text-3xl"></i>
                </button>

                <p className="amount text-2xl font-bold">{qty}</p>

                <button
                  onClick={plusQty}
                  className="plus flex bg-[#E7AA36] h-7 w-7 md:w-[40px] md:h-[40px] rounded-full justify-center items-center cursor-pointer"
                >
                  {/* <img
                    src={plus}
                    alt=""
                    width="10px"
                    height="10px"
                    className=" md:h-5 md:w-5"
                  /> */}
                  <i className="bi bi-plus text-3xl"></i>
                </button>
              </div>
            </div>

            <div className="button-checkout">
              <button
                className=" w-[150px] h-[80px]  p-2  md:w-[155px] shadow-xl lg:w-64 md:h-[8.5rem] lg:h-[10.5rem] md:text-[25px] left-[10%] bottom-[10%] border-none bg-yellow font-bold text-secondary rounded-[20px]"
                onClick={checkoutHandler}
              >
                CHECKOUT
              </button>
              <ModalMsg
                msg="Delivery Method Not Selected"
                isOpen={isModalOpen}
                onClose={handleCloseModal}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Details;
