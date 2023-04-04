/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios, { Axios } from "axios";

const getProduct = ({
  categories,
  favorite,
  limit,
  page,
  name,
  order,
  search,
}) => {
  const url = `${process.env.REACT_APP_SERVER_HOST}/products?limit=${limit}&page=${page}&search=${name}&order=${order}&categories=${categories}&favorite=${favorite}&search=${search}`;
  return axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
};

const getMeta = (params) => {
  const url = `${process.env.REACT_APP_SERVER_HOST}${params}`;
  return axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
};

const getProductsDetails = (params, controller) => {
  const url = `${baseUrl}/products/${params}`;
  return axios.get(url, params, { signal: controller.signal });
};

export { getProduct, getMeta, getProductsDetails };
