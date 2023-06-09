/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

// import React from "react";
import React, { useEffect, useMemo, useState } from "react";
import { forgot, getOtp } from "../../utils/https/auth";
import WithNavigate from "../../utils/wrapper/withNavigate";
import Logo from "../../assets/logos.svg";
import { Link } from "react-router-dom";
import Google from "../../assets/vector/google.svg";
import Footer from "../../components/templates/Footer";

function Forgot() {
  const controller = useMemo(() => new AbortController(), []);

  const [email, setEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [form, setForm] = useState({
    otp: "",
    password: "",
  });

  const onChange = (event) => {
    setEmail(event.target.value);
  };

  const emailSubmitHandler = (event) => {
    event.preventDefault();
    console.log(email);
    getOtp(email, controller)
      .then((res) => {
        console.log(res.data);
        setTimeLeft(120);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // console.log(timeLeft);
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    if (timeLeft === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timeLeft]);

  useEffect(() => {
    document.title = "Coffe Shop - Forgot Password";
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const inputOtpCode = (event) => {
    setForm((form) => {
      return { ...form, [event.target.name]: event.target.value };
    });
  };
  const otpSubmitHandler = (event) => {
    event.preventDefault();
    forgot(email, form.otp, form.password, controller)
      .then((res) => {
        console.log(res);
        setTimeLeft(0);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <section className="relative bg-forgot bg-cover bg-center pb-10 xl:pb-10">
        <div className="text flex flex-col justify-center items-center ">
          <p className=" font-Poppins font-bold flex text-white justify-center items-center text-[32px] mt-[3.9rem] md:text-[41px] lg:text-[4rem] lg:mt-[8rem]">
            Forgot your password?
          </p>
          <p className=" font-Poppins font-bold text-white justify-center items-center text-base lg:text-[27px]">
            Don’t worry, we got your back!
          </p>
        </div>

        <form className="flex flex-col justify-center items-center mt-12 lg:flex-row lg:mt-44">
          {timeLeft === 0 ? (
            <div className="form-input flex flex-col w-full justify-center items-center gap-3 md:mt-[55px] ">
              <div className="form-input flex flex-col w-full justify-center relative items-center md:gap-1">
                <label className=" text-white text-xs md:text-base lg:text-[24px] w-[75%] font-bold xl:w-[65%] ">
                  Email Adrress :
                </label>
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  className="p-3 rounded-xl text-black border solid border-greyFont w-[75%] md:p-[24px] xl:w-[65%] lg:p-8 lg:text-2xl"
                  type="text"
                  placeholder="Enter your email adrress"
                />
              </div>
              <div className=" flex justify-center items-center ">
                <button
                  onClick={emailSubmitHandler}
                  type="submit"
                  className="w-[9rem] md:w-[200px] text-secondary shadow-xl shadow-#ffba3366 0px 6px 20px 0px #ffba3366  flex p-2 md:p-[16px] bg-yellow rounded-xl text-[20px] font-bold items-center justify-center hover:bg-hoverYellow lg:w-[23rem] lg:p-[25px] lg:text-[24px]"
                >
                  Send
                </button>
              </div>
              <div className=" flex flex-col justify-center items-center">
                <p className="waiting font-Poppins text-base flex justify-center items-center text-center mt-8 md:text-[1.2rem] text-white font-bold mb-4 lg:mt-[6rem] xl:text-3xl">
                  Click here if you didn’t receive any link <br />
                  in 2 minutes
                </p>
                <button
                  type="button"
                  onClick={emailSubmitHandler}
                  className="w-[10rem] text-white shadow-xl shadow-#ffba3366 0px 6px 20px 0px #ffba3366  flex p-3 md:p-[19px] bg-secondary rounded-xl text-[20px] font-bold items-center justify-center lg:mt-4 lg:w-[25rem] lg:p-[25px]"
                >
                  Resend Link
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </form>

        {timeLeft === 0 ? (
          ""
        ) : (
          <form className="flex flex-col justify-center items-center  lg:flex-row  pb-32">
            <div className="form-input flex flex-col w-full justify-center items-center gap-3">
              <p className=" font-Poppins text-base font-bold text-white lg:text-3xl">
                {`${minutes}:${seconds}`}
              </p>
              <div className="form-input flex flex-col w-full justify-center relative items-center md:gap-1">
                <label
                  htmlFor="otp"
                  className="font-bold text-white 
                "
                >
                  OTP Code :
                </label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  onChange={inputOtpCode}
                  value={form.otp}
                  placeholder="Enter your OTP code..."
                  className="p-3 rounded-xl text-black border solid border-greyFont w-[75%] md:p-[24px] xl:w-[65%] lg:p-8 lg:text-2xl"
                />
                <label
                  htmlFor="password"
                  className="font-bold text-white
                "
                >
                  New Password :
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={inputOtpCode}
                  placeholder="Enter your New Password"
                  className="p-3 rounded-xl text-black border solid border-greyFont w-[75%] md:p-[24px] xl:w-[65%] lg:p-8 lg:text-2xl"
                />
              </div>
              <button
                type="submit"
                onClick={otpSubmitHandler}
                className="w-[9rem] md:w-[200px] text-secondary shadow-xl shadow-#ffba3366 0px 6px 20px 0px #ffba3366  flex p-2 md:p-[16px] bg-yellow rounded-xl text-[20px] font-bold items-center justify-center hover:bg-hoverYellow lg:w-[23rem] lg:p-[25px] lg:text-[24px]"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Forgot;
