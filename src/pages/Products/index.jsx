/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import withNavigate from "../../utils/wrapper/withNavigate";
import Mother from "../../assets/vector/mother.svg";
import Father from "../../assets/vector/father.svg";
import Doctor from "../../assets/vector/doctor.svg";
import Sport from "../../assets/vector/sport.svg";
import Header from "../../components/templates/Header";
import Footer from "../../components/templates/Footer";
import CardProducts from "../../components/base/CardProducts";
import { getProduct } from "../../utils/https/products";
import debounce from "lodash.debounce";
import * as te from "tw-elements";

function Products() {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState(
    searchParams.get("category") || null
  );

  const [favorite, setFavorite] = useState(
    searchParams.get("category") ? false : searchParams.get("favorite") || true
  );
  const [meta, setMeta] = useState({});
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const [limit, setLimit] = useState(12);
  const [name, setName] = useState(searchParams.get("name") || "");
  const [order, setOrder] = useState(searchParams.get("orderBy") || "newest");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await getProduct({
          categories,
          favorite,
          page,
          limit,
          name,
          order,
        });
        setData(data.data);
        setMeta(data.meta);
        // console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [categories, favorite, page, limit, name, order]);

  useEffect(() => {
    document.title = "Coffe Shop - Product";
  }, []);

  const onChangeCategories = (categories) => {
    setCategories(categories);
    setFavorite(false);
    setSearchParams({ category: categories });
  };

  const onFavorite = () => {
    setFavorite(true);
    setCategories(null);
    setSearchParams({ favorite: true });
  };

  const handlePage = (page) => {
    setPage(page);
    setCategories(null);
    setSearchParams({ page });
  };

  const handleSort = (order) => {
    setOrder(order);
    setSearchParams({ category: categories, orderBy: order });
  };

  return (
    <>
      <Header />
      <main className="flex relative flex-col lg:flex-row w-full">
        <section className="left-content flex flex-[1/3] flex-col lg:border-r lg:border-solid p-7  mx-auto">
          <section className="head pb-[4.4rem]">
            <h2 className=" text-[1.6rem] font-Rubik font-bold text-secondary text-center pb-4">
              Promo Today.
            </h2>
            <p className="date-coupon text-center">
              Coupons will be updated every weeks. <br />
              Check them out!
            </p>
          </section>
          <section className="people flex flex-col gap-5">
            <section className="mother-border flex w-[20.8rem] h-[6.8rem] bg-bgMother rounded-[20px] justify-center items-center p-6">
              <div className="mother-icon">
                <img src={Mother} alt="" />
              </div>
              <div className="mother-title">
                <p className="happy-title font-Poppins font-bold">
                  HAPPY MOTHER'S DAY!
                </p>

                <p className="get-title font-Poppins font-[400] text-[14px] flex-wrap">
                  Get one of our favorite menu for free!
                </p>
              </div>
            </section>
            <section className="mother-border flex w-[20.8rem] h-[6.8rem] bg-bgFather rounded-[20px] justify-center items-center p-6">
              <div className="mother-icon">
                <img src={Father} alt="" />
              </div>
              <div className="mother-title">
                <p className="happy-title font-Poppins font-bold">
                  Get a Cup of Coffee for FREE
                </p>
                <p className="get-title font-Poppins font-[400] text-[14px] flex-wrap">
                  on sunday morning Only at 7 to 9 AM !
                </p>
              </div>
            </section>
            <section className="mother-border flex w-[20.8rem] h-[6.8rem] bg-bgSport rounded-[20px] justify-center items-center p-6 gap-3">
              <div className="mother-icon">
                <img src={Sport} alt="" height="70" width="77" />
              </div>
              <div className="mother-title">
                <p className="happy-title font-Poppins font-bold">
                  SPORT NATIONAL DAYS!
                </p>
                <p className="get-title font-Poppins font-[400] text-[14px] flex-wrap">
                  Buy product Salty Rice and get 50% discount off for this
                  product
                </p>
              </div>
            </section>
            <section className="mother-border flex w-[20.8rem] h-[6.8rem] bg-bgDoctor rounded-[20px] justify-center items-center p-6">
              <div className="mother-icon">
                <img src={Doctor} alt="" width="100" />
              </div>
              <div className="mother-title">
                <p className="happy-title font-Poppins font-bold">
                  HAPPY HELLOWEEN!
                </p>
                <p className="get-title font-Poppins font-[400] text-[14px] flex-wrap">
                  Do you like chicken wings? Get 1 free only if you buy pinky
                </p>
              </div>
            </section>

            <div>
              <button className=" w-[21rem] bg-secondary border-none rounded-[1.3rem] h-16 text-white font-bold">
                Apply Coupon
              </button>
            </div>

            <br />
          </section>
          <div className="terms-container flex flex-col justify-start">
            <p className="terms-text">Terms and Conditions</p>
            <ol className="terms">
              <li>1. You can only apply 1 coupon per day</li>
              <li>2. Only for dine in</li>
              <li>3. Buy one get one for new user</li>
              <li>4. Make member card to apply coupon</li>
            </ol>
          </div>
        </section>
        <section className="right-content flex flex-[2/3] flex-col w-full items-center">
          <section className="dropdown-menu text-xl  hidden  justify-center items-center md:flex ">
            <ul className="flex xl:gap-[4.5rem] w-full text-center mt-[2rem] text-[#BCBEBD] ">
              <li
                onClick={() => onFavorite()}
                className={`w-[7.6rem] font-bold hover:text-secondary   cursor-pointer active:border-b-[3px] border-solid border-secondary active:text-secondary ${
                  favorite == true
                    ? "text-secondary font-bold border-b-[3px] border-solid border-secondary"
                    : "text-[#BCBEBD] "
                }`}
              >
                Favorite
              </li>
              <li
                onClick={() => onChangeCategories(2)}
                className={`w-[7.6rem] font-bold hover:text-secondary  border-solid border-secondary cursor-pointer ${
                  categories == 2
                    ? "text-secondary font-bold border-b-[3px] border-solid border-secondary"
                    : "text-[#BCBEBD]"
                }`}
              >
                Coffee
              </li>
              <li
                onClick={() => onChangeCategories(3)}
                className={`w-[7.6rem] font-bold hover:text-secondary  border-solid border-secondary cursor-pointer ${
                  categories == 3
                    ? "text-secondary font-bold border-b-[3px] border-solid border-secondary"
                    : "text-[#BCBEBD]"
                }`}
              >
                Non Coffee
              </li>
              <li
                onClick={() => onChangeCategories(1)}
                className={`w-[7.6rem] font-bold hover:text-secondary  border-solid border-secondary cursor-pointer ${
                  categories == 1
                    ? "text-secondary font-bold border-b-[3px] border-solid border-secondary"
                    : "text-[#BCBEBD]"
                }`}
              >
                Foods
              </li>
              <li
                onClick={() => onChangeCategories()}
                className=" w-[7.6rem] font-bold hover:text-secondary  border-solid border-secondary cursor-pointer"
              >
                Add on
              </li>
            </ul>
          </section>
          <section className="dropdown-res hidden">
            <button className="menu btn-menu">List Menu</button>
          </section>
          <div className="flex flex-col  mt-3 w-full">
            <div className="flex justify-end mx-[10%]">
              <div className="mb-1">
                <select
                  className=" cursor-pointer bg-secondary rounded-md font-medium text-white w-[120px] p-2 "
                  data-te-select-init
                  data-te-select-filter="true"
                  defaultValue={order}
                  id="order"
                  onChange={(event) => handleSort(event.target.value, order)}
                >
                  <option value="priciest" className="cursor-pointer ">
                    Priciest
                  </option>
                  <option value="cheapest" className="cursor-pointer ">
                    Cheapest
                  </option>
                  <option value="newest" className="cursor-pointer ">
                    Newest
                  </option>
                  <option value="latest" className="cursor-pointer ">
                    Latest
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-[5rem] gap-y-[5.5rem] pt-[90px] px-[5%] sm:px-[10%] md:px-0 pb-12">
            {isLoading == true ? (
              <div className="w-full h-full flex justify-center items-center px-auto ml-[900px] my-[20%]">
                <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-secondary via-secondary to-white ">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-2 border-white"></div>
                </div>
              </div>
            ) : (
              false
            )}

            {!isLoading &&
              data.length > 0 &&
              data?.map((product) => (
                <CardProducts
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  prodName={product.name_product}
                  price={product.price}
                />
              ))}
          </div>

          <section className="bottom-list w-full px-[3%]">
            <p className="text-secondary flex  items-start justify-start">
              *the price has been cutted by discount appears
            </p>
          </section>
          <div className=" flex  items-center font-medium mb-7 w-full">
            <div className="flex flex-row  gap-3 ml-auto w-full lg:mx-[5%] xl:mx-[11%] justify-end">
              <button
                disabled={meta.prev ? false : true}
                onClick={() => handlePage(page - 1)}
                type="button"
                className="bg-secondary text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-brown hover:text-white px-4"
              >
                <div className="flex flex-row align-middle">
                  <svg
                    className="w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="ml-2">Prev</p>
                </div>
              </button>
              <button
                disabled={meta.next ? false : true}
                onClick={() => handlePage(page + 1)}
                type="button"
                className="bg-secondary text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-brown hover:text-white px-4"
              >
                <div className="flex flex-row align-middle">
                  <span className="mr-2">Next</span>
                  <svg
                    className="w-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const NewProduct = withNavigate(Products);
export default NewProduct;
