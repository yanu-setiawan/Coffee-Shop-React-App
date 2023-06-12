/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useMemo } from "react";
import Header from "../../components/templates/Header";
import Footer from "../../components/templates/Footer";
import profile from "../../assets/profile/image1.png";
import { getProfile } from "../../utils/https/auth";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { usersAction } from "../../Redux/slices/users";
import Loader from "../../components/base/Loader";
import ChangePWD from "../../components/base/Modal/changePWD";
import moment from "moment/moment";
import { authLogout } from "../../utils/https/auth";
import { useNavigate } from "react-router-dom";
import Logout from "../../components/base/Logout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
  const userData = useSelector((state) => state.user);

  const [dataUser, setDataUser] = useState(userData.data);
  const [dataUserTemp, setDataUserTemp] = useState(userData.data);
  const [isLoading, setIsLoading] = useState(true);
  const [inputPict, setInputPict] = useState(false);
  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controller = useMemo(() => new AbortController(), []);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getProfile(
          userData.data.id,
          controller,
          userData.data.token
        );
        setDataUser(data.data.data[0]);
        setDataUserTemp(data.data.data[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) =>
    setDataUser((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });

  const handlePict = (e) => {
    setDataUser((prev) => ({ ...prev, image: e.target.files[0] }));
    setInputPict(URL.createObjectURL(e.target.files[0]));
  };

  const handleChangePWD = (e) => {
    setModal(true);
  };

  // const handleCloseModal = () => {
  //   setModal(false);
  // };

  const updateProfile = (event) => {
    event.preventDefault();
    // console.log(dataUser);
    try {
      dispatch(
        usersAction.doUpdateProfile({
          id: userData.data.id,
          payload: dataUser,
          controller,
          token: userData.data.token,
        })
      );
      toast.success("Update Profile Success");
    } catch (error) {
      console.log(error, "errrrrrr");
    }
  };
  const handleLogout = () => {
    setIsOpen(true);
  };

  // const handleLogout = async () => {
  //   setIsLoading(true);
  //   try {
  //     const result = await authLogout(controller, userData.data.token);

  //     if (result.status === 200) {
  //       console.log(result);
  //       dispatch(usersAction.authLogout());
  //       setIsLoading(false);
  //       navigate("/", { replace: true });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const cancelUpdate = (e) => setDataUser(dataUserTemp);

  return (
    <>
      {(userData.isLoading || isLoading) && <Loader />}
      {modal && <ChangePWD modal={modal} setModal={setModal} />}
      {isOpen && <Logout isOpen={isOpen} setIsOpen={setIsOpen} />}

      <Header />
      <main className="w-full flex justify-center bg-profile bg-cover bg-center py-[100px]">
        <div className="w-4/5 max-width flex flex-col">
          <h1 className="font-medium text-4xl py-4 text-white">User Profile</h1>
          <form onSubmit={updateProfile}>
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="w-full h-[380px] flex flex-col justify-between items-center rounded-2xl border overflow-hidden bg-white relative lg:w-2/4">
                <label
                  htmlFor="avatar"
                  className="relative btn w-8 h-8 flex justify-center items-center rounded-full bg-secondary cursor-pointer right-[6.5rem] left-[57px] top-[162px] z-20"
                >
                  <button
                    type="button"
                    className=" cursor-pointer inset-0 absolute z-20"
                  >
                    <i className="bi bi-pencil text-white"></i>
                  </button>
                  <input
                    // hidden
                    type="file"
                    onChange={handlePict}
                    multiple={false}
                    id="avatar"
                    name="avatar"
                    className=" rounded-md absolute inset-0  cursor-pointer z-30  opacity-0 "
                  />
                </label>

                <span className="w-32 h-32 rounded-full border-2 overflow-hidden mt-8">
                  <img
                    src={
                      inputPict
                        ? inputPict
                        : dataUser.image
                        ? dataUser.image
                        : profile
                    }
                    alt="profile-picture"
                    className=" object-cover h-full w-full bg-center bg-cover"
                  />
                  <input type="text" />
                </span>
                <h2 className="font-bold text-xl">
                  {dataUser.display_name || "Your Display Name"}
                </h2>

                <h3 className="text-sm text-greydark">{dataUser.email}</h3>
                <p className="text-center">Has been ordered 15 products</p>
                <hr className="w-full h-4 bg-secondary" />
              </div>
              <div className="w-full flex flex-col justify-between rounded-2xl border overflow-hidden bg-white">
                <div className="flex justify-between items-center pl-8 pr-5 mt-4">
                  <h2 className="font-bold text-2xl text-greydark">Contacts</h2>
                  <div className="btn w-12 h-12 flex justify-center items-center rounded-full bg-secondary cursor-pointer">
                    <i className="bi bi-pencil text-xl text-white"></i>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-2 ml-8 mr-14">
                  <div className="input flex flex-col">
                    <label
                      htmlFor="email"
                      className="font-medium text-xl text-grey"
                    >
                      Email adress :
                    </label>
                    <input
                      onChange={handleChange}
                      name="email"
                      type="text"
                      id="email"
                      value={dataUser?.email}
                      className="py-2 border border-solid rounded-md pl-2 "
                    />
                  </div>
                  <div className="input flex flex-col">
                    <label
                      htmlFor="phone"
                      className="font-medium text-xl text-grey"
                    >
                      Mobile number :
                    </label>
                    <input
                      onChange={handleChange}
                      name="phone_number"
                      type="text"
                      id="phone"
                      value={dataUser?.phone_number}
                      className="py-2 border border-solid rounded-md pl-2"
                    />
                  </div>
                  <div className="input flex flex-col mb-2">
                    <label
                      htmlFor="address"
                      className="font-medium text-xl text-grey"
                    >
                      Delivery address :
                    </label>
                    <textarea
                      onChange={handleChange}
                      name="address"
                      id="address"
                      rows="2"
                      className="py-2 border border-solid rounded-md pl-2"
                      value={dataUser?.address}
                    ></textarea>
                  </div>
                </div>
                <hr className="w-full h-4 bg-secondary" />
              </div>
            </div>
            <div className="flex flex-col gap-4 mb-4 mt-[2rem] lg:flex-row">
              <div className="w-full min-h-[420px] flex flex-col justify-between rounded-2xl border overflow-hidden bg-white">
                <div className="flex justify-between items-center pl-8 pr-5 mt-4">
                  <h2 className="font-bold text-2xl text-greydark">Details</h2>
                  <div className="btn w-12 h-12 flex justify-center items-center rounded-full bg-secondary cursor-pointer">
                    <i className="bi bi-pencil text-xl text-white"></i>
                  </div>
                </div>
                <div className="flex flex-col ml-8 mr-14 gap-5 lg:flex-row">
                  <div className="flex flex-1 gap-5 flex-col">
                    <div className="input flex flex-col">
                      <label
                        htmlFor="displayName"
                        className="font-medium text-xl text-grey"
                      >
                        Display Name :
                      </label>
                      <input
                        onChange={handleChange}
                        name="display_name"
                        type="text"
                        id="displayName"
                        value={dataUser?.display_name}
                        className="py-2 border border-solid rounded-md pl-2"
                      />
                    </div>
                    <div className="input flex flex-col">
                      <label
                        htmlFor="firstName"
                        className="font-medium text-xl text-grey"
                      >
                        First Name :
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="first_name"
                        id="firstName"
                        value={dataUser?.first_name}
                        className="py-2 border border-solid rounded-md pl-2"
                      />
                    </div>
                    <div className="input flex flex-col">
                      <label
                        htmlFor="lastName"
                        className="font-medium text-xl text-grey"
                      >
                        Last Name :
                      </label>
                      <input
                        onChange={handleChange}
                        name="last_name"
                        type="text"
                        id="lastName"
                        value={dataUser?.last_name}
                        className="py-2 border border-solid rounded-md pl-2"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 gap-9 flex-col">
                    <div className="input flex flex-col">
                      <label
                        htmlFor="birth_date"
                        className="font-medium text-xl text-grey"
                      >
                        DD/MM/YY
                      </label>
                      <input
                        onChange={handleChange}
                        name="birth_date"
                        type="date"
                        id="birth_date"
                        value={
                          dataUser?.birth_date
                            ? moment(dataUser?.birth_date).format("YYYY-MM-DD")
                            : "yyyy-MM-dd"
                        }
                        className="py-2 border border-solid rounded-md pl-2 cursor-pointer"
                      />
                    </div>
                    <div className="flex gap-6 justify-center items-center ">
                      <div className="input-data-radio flex gap-2">
                        <input
                          onChange={handleChange}
                          type="radio"
                          name="gender"
                          id="male"
                          value="MALE"
                          className="hidden"
                          checked={dataUser?.gender === "MALE" ? true : false}
                        />
                        <span></span>
                        <label
                          htmlFor="male"
                          className="font-medium text-xl text-grey cursor-pointer"
                        >
                          Male
                        </label>
                      </div>
                      <div className="input-data-radio flex gap-2">
                        <input
                          onChange={handleChange}
                          type="radio"
                          name="gender"
                          id="female"
                          value="FEMALE"
                          className="hidden"
                          checked={dataUser?.gender === "FEMALE" ? true : false}
                        />
                        <span></span>
                        <label
                          htmlFor="female"
                          className="font-medium text-xl text-grey cursor-pointer"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="w-full h-4 bg-secondary" />
              </div>
              <div className="flex min-w-[300px] max-w-sm flex-col justify-between pb-2">
                <h3 className="font-bold text-xl text-center text-white">
                  Do you want to save the change?
                </h3>
                <div className="flex flex-col gap-5">
                  <button
                    type="submit"
                    className="py-4 rounded-2xl text-white bg-secondary font-medium"
                  >
                    Save Change
                  </button>
                  <button
                    onClick={cancelUpdate}
                    type="button"
                    className="py-4 rounded-2xl text-secondary bg-yellow font-medium"
                  >
                    Cancel
                  </button>
                </div>
                <div className="flex flex-col gap-5 mt-4">
                  <button
                    onClick={handleChangePWD}
                    type="button"
                    className="py-4 rounded-2xl text-secondary bg-white flex justify-between px-10 font-medium"
                  >
                    Edit Password
                    <i className="bi bi-caret-right-fill text-secondary"></i>
                  </button>
                  <div>{/* <changePWD isOpen={handleChangePWD} /> */}</div>
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="py-4 rounded-2xl text-secondary bg-white flex justify-between px-10 font-medium"
                  >
                    Log out{" "}
                    <i className="bi bi-caret-right-fill text-secondary"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme="light"
        />
      </main>
      <Footer />
    </>
  );
}

export default Profile;
