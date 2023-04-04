/* eslint-disable no-undef */
// /* eslint-disable no-undef */
import axios from "axios";
// import store from "../../Redux/store";

const API_URL = `${process.env.REACT_APP_SERVER_HOST}`;
// const local_URL = `${process.env.REACT_APP_LOCAL_HOST}`;

export const userLogin = (email, password) => {
  const url = `${API_URL}/auth`;
  return axios({
    method: "post",
    url,
    data: { email, password },
  });
};

export const register = (email, password, phone_number) => {
  const url = `${API_URL}/users`;
  return axios({
    method: "post",
    url,
    data: { email, password, phone_number },
  });
};

// export const getUser = (id, controller) => {
//   const url = `${}/users/${id}`;
//   return axios.get(url, { signal: controller.signal });
// };

export const getProfile = (id, controller, token) => {
  const url = `${API_URL}/users/profile/${id}`;
  return axios.get(url, {
    signal: controller.signal,
    headers: { Authorization: `bearer ${token}` },
  });
};

export const updateProfile = (id, payload, controller, token) => {
  const url = `${API_URL}/users/profile/${id}`;
  return axios.patch(url, payload, {
    signal: controller.signal,
    headers: { Authorization: `bearer ${token}` },
  });
};

export const changePassword = (id, payload, controller, token) => {
  const url = `${API_URL}/users/editPWD/${id}`;
  return axios.patch(url, payload, {
    signal: controller.signal,
    headers: { Authorization: `bearer ${token}` },
  });
};

export const forgot = (email, otp, password, controller) => {
  const url = `${API_URL}/auth/forgot`;
  const body = { email, otp: otp, password };
  return axios.patch(url, body, { signal: controller.signal });
};

export const getOtp = (email, controller) => {
  const url = `${API_URL}/auth/otp`;
  return axios.patch(url, { email }, { signal: controller.signal });
};

export const authLogout = (controller, token) => {
  const url = `${API_URL}/auth/logout`;
  return axios.delete(url, {
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
};
