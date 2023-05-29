/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import WithNavigate from "../../utils/wrapper/withNavigate";
import Google from "../../assets/vector/google.svg";
import Logo from "../../assets/logos.svg";
import { useState, useMemo, useEffect } from "react";

import { register } from "../../utils/https/auth";

// import Background from "../../assets/background/BgHome.webp";
import Footer from "../../components/templates/Footer";

function Register() {
  const navigate = useNavigate();
  const controller = useMemo(() => new AbortController(), []);

  const [form, setForm] = useState({
    email: "",
    password: "",
    phone_number: "",
  });

  const onChangeForm = (event) => {
    setForm((form) => {
      return {
        ...form,
        [event.target.name]: event.target.value,
      };
    });
  };

  const registerHandler = (event) => {
    event.preventDefault();
    event.preventDefault();
    if (!form.email || !form.password) return console.log("input required");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      console.log("invalid email");
      return;
    }

    register(form.email, form.password, form.phone_number, controller)
      .then(() => {
        // console.log(res.data);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    document.title = "Coffe Shop - Register";
  }, []);

  return (
    <>
      <section className="flex relative">
        <div className="w-full bg-login bg-cover bg-center absolute inset-0 lg:relative pb-10 lg:h-[69rem]"></div>
        <section className="w-full relative">
          {
            <div className="flex flex-col w-full mb-[50px]">
              <div className="flex  py-[5%] px-[8%] items-center justify-between w-full">
                <div className="logo flex gap-3">
                  <img
                    src={Logo}
                    alt=""
                    className="coffee"
                    width="30"
                    height="33"
                  />
                  <p className=" flex items-center font-bold text-white lg:text-black">
                    Coffee Shop
                  </p>
                </div>
                <div className="button flex">
                  <Link
                    to="/login"
                    className="p-10px h-11 w-[9.3rem] bg-yellow hover:bg-hoverYellow text-secondary rounded-[50px] flex justify-center items-center font-medium"
                  >
                    Login
                  </Link>
                </div>
              </div>

              <div className="header">
                <p className=" text-[2rem] flex justify-center items-center font-bold text-white my-14 md:text-[35px] lg:text-secondary">
                  Sign Up
                </p>
              </div>

              <form
                id="form"
                className="flex flex-col  items-center  gap-5  justify-center"
              >
                <div className="form-input flex flex-col gap-3 w-full justify-center relative items-center">
                  <label className="block text-white text-xl lg:text-black w-[70%] font-bold ">
                    Email Adrress :
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={onChangeForm}
                    placeholder="Enter your email address"
                    className="p-4 rounded-xl text-black border solid border-greyFont w-[70%] md:p-[24px] "
                  />
                </div>
                <div className=" flex flex-col  gap-3 w-full justify-center relative items-center">
                  <label className="text-white text-xl  lg:text-black w-[70%] font-bold  ">
                    Password :
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={onChangeForm}
                    placeholder="Enter your password"
                    className="p-4 rounded-xl text-black border solid border-greyFont w-[70%] md:p-[24px] "
                  />
                  {/* <i className="bx bx-hide show-hide absolute top-[55%] left-[80%] text-xl cursor-pointer"></i> */}
                </div>
                <div className=" flex flex-col  gap-3 w-full justify-center relative items-center">
                  <label className="text-white text-xl  lg:text-black w-[70%] font-bold  ">
                    Phone Number :
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone_number"
                    value={form.phone_number}
                    onChange={onChangeForm}
                    placeholder="Enter your phone number"
                    className="p-4 rounded-xl text-black border solid border-greyFont w-[70%] md:p-[24px] "
                  />
                </div>

                <div className="but flex flex-col w-full items-center justify-center gap-6 ">
                  <button
                    onClick={registerHandler}
                    type="submit"
                    className="w-[70%] text-secondary shadow-xl shadow-#ffba3366 0px 6px 20px 0px #ffba3366  flex p-4 md:p-[24px] bg-yellow rounded-xl text-[20px] font-bold items-center justify-center hover:bg-hoverYellow"
                  >
                    Sign Up
                  </button>

                  <button
                    type="submit"
                    className="bg-white text-black w-[70%] shadow-xl hover:bg-#eeeff2 shadow-#c4c4c4ab flex p-4 md:p-[24px] rounded-xl text-[20px] font-bold justify-center items-center gap-2 hover:bg-hoverWhite"
                  >
                    <img src={Google} alt="" width="26" height="26" />
                    Sign Up with Google
                  </button>
                </div>
              </form>
            </div>
          }
        </section>
      </section>

      <section className="add-member hidden md:relative max-w-full lg:flex items-center justify-center">
        <div className="card mx-auto flex items-center absolute justify-between p-[50px] w-[78%] bg-white z-10 rounded-[10px] shadow-xl shadow-#c4c4c4ab ">
          <div className="text">
            <h2 className="title text-[35px] font-medium mb-5">
              Get your member <br />
              card now!
            </h2>
            <p className="description text-greyFont">
              Let's join with our member and enjoy the deals.
            </p>
          </div>
          <button className="btn-create h-[3.8rem] w-[15.5rem] border-none bg-yellow text-secondary font-bold rounded-[20px] shadow-lg shadow-sdwYellow">
            Create Now
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

const NewRegister = WithNavigate(Register);
export default NewRegister;
