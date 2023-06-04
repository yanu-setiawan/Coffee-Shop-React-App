/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authLogout } from "../../../utils/https/auth";
import { profileAction } from "../../../Redux/slices/profile";
import Loader from "../Loader";
import { usersAction } from "../../../Redux/slices/users";
import { historyAction } from "../../../Redux/slices/history";
import { useNavigate } from "react-router-dom";

function Logout({ isOpen, setIsOpen }) {
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);
  const token = useSelector((state) => state.user.data.token);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      const result = await authLogout(token, controller);
      // console.log(result);
      if (result.status && result.status === 200) {
        dispatch(usersAction.authLogout());
        dispatch(profileAction.filter());
        dispatch(historyAction.filter());

        setIsOpen(false);
        setLoading(false);
        navigate("/login");
      }

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickChild = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      {isLoading ? <Loader /> : <></>}
      <section className=" w-full h-full bg-black  bg-opacity-60  fixed z-10  inset-0">
        <section className="">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="p-6 bg-white rounded-lg shadow w- h-[20rem] w-[30rem] px-11 ">
              <div className="  flex justify-end ">
                <button
                  type="button"
                  className="  text-[32px] font-bold text-tickitz-error cursor-pointer"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  &times;
                </button>
              </div>

              <h2 className="text-4xl font-Poppins font-bold leading-tight tracking-tight text-dark md:text-4xl flex justify-start items-center">
                Are you sure want to Log Out?
              </h2>

              <div
                className="mt-4  lg:mt-5 "
                // onSubmit={handleSave}
              >
                <div className="flex w-full justify-between items-center">
                  <button
                    onClick={handleLogout}
                    type="submit"
                    className="w-[10.625rem] mt-[4rem] h-14  text-white bg-secondary focus:ring-4 focus:outline-none  font-bold rounded-lg text-lg px-5 py-2.5 text-center "
                  >
                    Logout
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="w-[10.625rem] mt-[4rem] h-14  text-white bg-secondary focus:ring-4 focus:outline-none  font-bold rounded-lg text-lg px-5 py-2.5 text-center "
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Logout;
