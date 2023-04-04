import axios from "axios";
// import store from "../../Redux/store";

// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_SERVER_HOST;

export const addTransactions = (data, controller, token) => {
  const url = `${baseUrl}/transactions`;
  //
  return axios.post(url, data, {
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getHistory = (controller, token) => {
  const url = `${baseUrl}/transactions`;
  return axios.get(url, {
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteTransaction = (transactionId, controller, token) => {
  const url = `${baseUrl}/transactions/${transactionId}`;
  return axios.delete(url, {
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
};
