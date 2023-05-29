/* eslint-disable no-unused-vars */
import React, { Fragment, useMemo, useState, useEffect } from "react";
import Header from "../../components/templates/Header";
import Footer from "../../components/templates/Footer";
import img1 from "../../assets/menu/Coffelatte.webp";
import img2 from "../../assets/menu/ayambakar.png";
import truck from "../../assets/vector/truck.svg";
import bank from "../../assets/vector/bank.svg";
import card from "../../assets/vector/card.svg";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/base/Loader";
import { counterAction } from "../../Redux/slices/cart";
import ModalMsg from "../../components/base/Modal/ModalMsg";
import { addTransactions } from "../../utils/https/transactions";
import NothingCart from "../../components/base/Payment/NothingCart";
import OrderProduct from "../../components/base/Payment/OrderProduct";

function Payments() {
  const controller = useMemo(() => new AbortController(), []);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const cartState = state.counter;
  const userState = state.user.data;
  const { address, phone_number } = state.profile.data;

  const [isLoading, setIsLoading] = useState(userState === null ? true : false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [payMethod, setPayMethod] = useState(0);

  const changePayment = (event) => {
    console.log(event.target.value);
    setPayMethod(event.target.value);
  };

  const submitHandler = async () => {
    if (payMethod === 0) return setIsModalOpen(true);
    const dataShoppingCart = cartState.shoppingCart.map((item) => {
      const { img, name_product, ...newItem } = item;
      console.log(item);
      if (img || name_product) console.log("");
      return newItem;
    });
    const data = {
      promo_id: 1,
      delivery_id: cartState.delivery,
      payment_id: payMethod,
      notes: cartState.notes,
      status_id: 1,
      products: dataShoppingCart,
    };
    console.log(data);
    setIsLoading(true);
    try {
      const result = await addTransactions(data, controller, userState.token);
      console.log(result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    dispatch(counterAction.resetCounter());
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.title = "Coffee Shop - Your Cart";
  }, []);

  const onCart = cartState.shoppingCart;
  let subtotalOnCart = 0;
  cartState.shoppingCart.forEach((prod) => {
    subtotalOnCart += prod.subtotal;
  });
  const taxFee = subtotalOnCart * 0.05;
  let shipping = cartState.delivery == 2 ? 10000 : 0;
  const grandTotal = subtotalOnCart + taxFee + shipping;

  return (
    <Fragment>
      {isLoading && <Loader />}
      <Header title="cart" />
      <main>
        <section>
          <div className="bg-payment bg-cover bg-center  px-5 pt-10 py-40 md:px-20 lg:px-36">
            <h1 className="text-white text-2xl lg:text-4xl font-bold">
              Checkout your <br /> item now!
            </h1>
            <div className="mt-10 lg:flex lg:justify-between">
              <div className="px-8 py-20 lg:w-2/5 lg:h-3/5 bg-white rounded-xl">
                <h2 className="text-center text-4xl mb-14 font-bold lg:text-4xl">
                  Order Summary
                </h2>

                {cartState.shoppingCart.length < 1 ? (
                  <NothingCart />
                ) : (
                  onCart.map((product) => (
                    <OrderProduct
                      key={product.id}
                      img={product.img}
                      name_product={product.name_product}
                      size={product.size_id}
                      qty={product.qty}
                      subtotal={product.subtotal}
                    />
                  ))
                )}
                <hr className="border border-grey mb-5" />
                <div className="mt-4">
                  {/* <div className="flex justify-between">
                    SUBTOTAL{" "}
                    <span>
                      IDR{" "}
                      {cartState.shoppingCart[0].subtotal.toLocaleString(
                        "id-ID"
                      )}
                    </span>
                  </div> */}
                  <div className="flex justify-between">
                    TAX & FEES <span>IDR {taxFee.toLocaleString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between">
                    SHIPPING <span>IDR {shipping.toLocaleString("id-ID")}</span>
                  </div>
                </div>
                <hr className="border border-grey my-3" />

                <div className="flex justify-between mt-8">
                  TOTAL <span>IDR {grandTotal.toLocaleString("id-ID")}</span>
                </div>
              </div>
              <div className="flex flex-col gap-12 mt-10 lg:mt-0 lg:gap-[2.5rem] lg:w-[45%]">
                <div>
                  <div className="flex justify-between text-white mb-6">
                    <p>Address details</p>
                    <p className=" cursor-pointer">edit</p>
                  </div>
                  <div className="bg-white px-8 py-8 rounded-2xl">
                    <p className="pb-2">{address}</p>
                    <hr className="border border-grey mb-2" />

                    <p className="pt-1">Phone : {phone_number}</p>
                  </div>
                </div>
                <div>
                  <p className="text-white mb-6">Payment method</p>
                  <div className="px-8 py-8 bg-white rounded-2xl">
                    <div className="flex items-center gap-2 pb-2">
                      <label htmlFor="card">
                        <input
                          className=" cursor-pointer"
                          type="radio"
                          name="payment_id"
                          value={1}
                          onChange={changePayment}
                          id="card"
                        />
                      </label>
                      <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center">
                        <img src={card} />
                      </div>
                      <p>Card</p>
                    </div>

                    <div className="flex items-center gap-2 border-t border-b py-2">
                      <label htmlFor="bank">
                        <input
                          className=" cursor-pointer"
                          type="radio"
                          name="payment_id"
                          id="bank"
                          value={2}
                          onChange={changePayment}
                        />
                      </label>
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                        <img src={bank} />
                      </div>
                      <p>Bank account</p>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <label htmlFor="cod">
                        <input
                          className=" cursor-pointer"
                          type="radio"
                          name="payment_id"
                          value={3}
                          id="cod"
                          onChange={changePayment}
                        />
                      </label>
                      <div className="w-10 h-10 bg-yellow rounded-lg flex items-center justify-center">
                        <img src={truck} />
                      </div>
                      <p>Cash on delivery</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={submitHandler}
                  className="flex items-center justify-center bg-secondary text-white rounded-3xl py-5"
                >
                  <p>Confirm and Pay</p>
                </button>
                <ModalMsg
                  msg="Payment Method Not Selected"
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Payments;
