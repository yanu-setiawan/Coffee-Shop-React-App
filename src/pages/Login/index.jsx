/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import React, { useEffect, useState } from "react";
import WithNavigate from "../../utils/wrapper/withNavigate";
import Logo from "../../assets/logos.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Google from "../../assets/vector/google.svg";
import Footer from "../../components/templates/Footer";
import { usersAction } from "../../Redux/slices/users";
import { profileAction } from "../../Redux/slices/profile";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/base/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState();
  const controllerProfile = React.useMemo(() => new AbortController(), []);
  const [error, setError] = useState(false);

  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   const valid = { email: "", password: "" };

  //   if (formLogin.email === "") valid.email = "Email Invalid";
  //   if (!formLogin.password) valid.password = "Password Required";

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(formLogin.email)) valid.email = "Email Invalid";

  //   if (!formLogin.email || !formLogin.password) {
  //     return setError({
  //       email: valid.email,
  //       password: valid.password,
  //     });
  //   }

  //   dispatch(
  //     usersAction.doLogin({
  //       email: formLogin.email,
  //       password: formLogin.password,
  //     })
  //   )
  //     .then((res) => {
  //       console.log(res);
  //       dispatch(
  //         profileAction.getProfileThunk({
  //           id: res.id,
  //           token: res.token,
  //           controllerProfile,
  //         })
  //       );
  //       toast.success("Welcome,Happy Shoping:)");
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       // console.log(error.response.);
  //       return setError({
  //         email: error.response.data.msg,
  //         password: error.response.data.msg,
  //       });
  //     });
  // };
  const handleLogin = async (event) => {
    event.preventDefault();
    const valid = { email: "", password: "" };
    if (formLogin.email === "") valid.email = "Email Invalid";
    if (!formLogin.password) valid.password = "Password Required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formLogin.email)) valid.email = "Email Invalid";
    if (!formLogin.email || !formLogin.password) {
      return setError({
        email: valid.email,
        password: valid.password,
      });
    }

    try {
      const res = await dispatch(
        usersAction.doLogin({
          email: formLogin.email,
          password: formLogin.password,
        })
      );
      // console.log(typeof res);
      console.log(res);

      dispatch(
        profileAction.getProfileThunk({
          id: res.payload.id,
          controllerProfile,
          token: res.payload.token,
        })
      );
      toast.success("Login success!", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(function () {
        navigate("/");
      }, 1500);
    } catch (error) {
      return setError({
        email: error.response.data.msg,
        password: error.response.data.msg,
      });
    }
  };

  useEffect(() => {
    document.title = "Coffe Shop - LOGIN";
  }, []);

  const onChangeForm = (e) =>
    setFormLogin((form) => {
      // setError(false);
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });

  return (
    <>
      {(users.isLoading || isLoading) && <Loader />}
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
                    to="/register"
                    className="p-10px h-11 w-[9.3rem] bg-yellow hover:bg-hoverYellow text-secondary rounded-[50px] flex justify-center items-center font-medium"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>

              <div className="header">
                <p className=" text-[2rem] flex justify-center items-center font-bold text-white my-14 md:text-[35px] lg:text-secondary">
                  Login
                </p>
              </div>
              <form
                id="form"
                className="flex flex-col  items-center  gap-5  justify-center"
                onSubmit={handleLogin}
              >
                <div className="form-input flex flex-col gap-3 w-full justify-center relative items-center">
                  <label
                    className="block text-white text-xl lg:text-black w-[70%] font-bold "
                    htmlFor="email"
                  >
                    Email Adrress :
                  </label>
                  <input
                    onChange={onChangeForm}
                    name="email"
                    id="email"
                    className={`p-4 rounded-xl text-black border-2 border-greyFont solid w-[70%] md:p-[24px] ${
                      !error.email ? "border-greyFont" : "border-red-500"
                    } `}
                    type="text"
                    placeholder="Enter your email adrress"
                  />
                  <p className=" text-red-500 w-[70%]"> {error.email}</p>
                </div>
                <div className=" flex flex-col  gap-3 w-full justify-center relative items-center">
                  <label
                    className="text-white text-xl  lg:text-black w-[70%] font-bold  "
                    htmlFor="password"
                  >
                    Password :
                  </label>
                  <input
                    onChange={onChangeForm}
                    name="password"
                    id="password"
                    className={`p-4 rounded-xl text-black border-2 solid w-[70%] md:p-[24px] ${
                      !error.password ? "border-greyFont" : "border-red-500"
                    } `}
                    type="password"
                    placeholder="Enter your password"
                  />
                  <p className=" text-red-500 w-[70%]">{error.password}</p>
                </div>

                <div className="flex w-full justify-center relative items-center">
                  <Link to="/forgot" className="w-[70%]">
                    <p className="text-white flex justify center items-center hover:text-yellow md:text-[20px] md:mb-5 underline font-bold  lg:text-secondary ">
                      Forgot password ?
                    </p>
                  </Link>
                </div>
                <div className="but flex flex-col w-full items-center justify-center gap-6 ">
                  <button
                    type="submit"
                    className="w-[70%] text-secondary shadow-xl shadow-#ffba3366 0px 6px 20px 0px #ffba3366  flex p-4 md:p-[24px] bg-yellow rounded-xl text-[20px] font-bold items-center justify-center hover:bg-hoverYellow"
                  >
                    Login
                  </button>

                  <button
                    type="submit"
                    className="bg-white text-black w-[70%] shadow-xl hover:bg-#eeeff2 shadow-#c4c4c4ab flex p-4 md:p-[24px] rounded-xl text-[20px] font-bold justify-center items-center gap-2 hover:bg-hoverWhite"
                  >
                    <img src={Google} alt="" width="26" height="26" />
                    Login with Google
                  </button>
                </div>
              </form>
            </div>
          }
        </section>
      </section>

      <section className="add-member hidden md:relative max-w-full lg:flex items-center justify-center">
        <div
          className="card mx-auto flex items-center absolute justify-between p-[50px] w-[78%] bg-white z-10 rounded-[10px]
           shadow-xl shadow-#c4c4c4ab "
        >
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
        <ToastContainer />
      </section>
      <Footer />
    </>
  );
}

export default Login;
