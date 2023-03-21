/* eslint-disable no-undef */
import axios from "axios";
// export const getProducts = (controller) => {
//   // eslint-disable-next-line no-undef
//   const url = process.env.REACT_APP_SERVER_HOST;
//   return axios.get(`${url}/products`, {
//     signal: controller.signal,
//   });
// };
const getProduct = () => {
  const url = `${process.env.REACT_APP_SERVER_HOST}/products?limit=12`;
  return axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
};

// axios
//   .get("https://coffee-shop-123.vercel.app/products")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

export { getProduct };
