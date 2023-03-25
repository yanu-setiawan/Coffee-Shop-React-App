/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import withSearchParams from "../../utils/wrapper/withSearchParams";
import withNavigate from "../../utils/wrapper/withNavigate";
import Mother from "../../assets/vector/mother.svg";
import Father from "../../assets/vector/father.svg";
import Doctor from "../../assets/vector/doctor.svg";
import Sport from "../../assets/vector/sport.svg";
import Header from "../../components/templates/Header";
import Footer from "../../components/templates/Footer";
import CardProducts from "./card";
import { getProduct } from "../../utils/https/products";
import axios from "axios";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: false,
      categories: 1,
      favorite: true,
    };
  }

  async componentDidMount() {
    this.setState({
      isLoading: true,
    });
    await getProduct({
      categories: this.state.categories,
      favorite: this.state.favorite,
    })
      .then(({ data }) =>
        this.setState({
          data: data.data,
        })
      )
      .catch((err) => console.log(err))
      .finally(() =>
        this.setState({
          isLoading: false,
        })
      );
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.categories !== this.state.categories) {
      this.setState({
        isLoading: true,
      });
      await getProduct({
        categories: this.state.categories,
        favorite: this.state.favorite,
      })
        .then(({ data }) =>
          this.setState({
            data: data.data,
          })
        )
        .catch((err) => console.log(err))
        .finally(() =>
          this.setState({
            isLoading: false,
          })
        );
    }
  }

  onChangeCategories = (categories) => {
    this.setState({ categories, favorite: false });
  };

  onFavorite = () => {
    this.setState({ favorite: true });
  };

  // fetchDatas = (text) => {
  //   const url = `${
  //     process.env.REACT_APP_SERVER_HOST
  //   }/products?${text.toString()}`;
  //   Axios.get(url).then((res) =>
  //     this.setState({
  //       data: res.db.data,
  //     })
  //   );
  // };

  render() {
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
            <section className="dropdown-menu text-xl  hidden justify-center items-center lg:flex ">
              <ul className="flex xl:gap-[4.5rem] w-full text-center mt-[2rem] text-[#BCBEBD] ">
                <li
                  onClick={() => this.onFavorite()}
                  className=" w-[7.6rem] font-bold hover:text-secondary hover:border-b-[3px] border-solid border-secondary cursor-pointer"
                >
                  Favorite
                </li>
                <li
                  onClick={() => this.onChangeCategories(2)}
                  className=" w-[7.6rem] font-bold hover:text-secondary hover:border-b-[3px] border-solid border-secondary cursor-pointer"
                >
                  Coffe
                </li>
                <li className=" w-[7.6rem] font-bold hover:text-secondary hover:border-b-[3px] border-solid border-secondary cursor-pointer">
                  Non Coffee
                </li>
                <li className=" w-[7.6rem] font-bold hover:text-secondary hover:border-b-[3px] border-solid border-secondary cursor-pointer">
                  Foods
                </li>
                <li className=" w-[7.6rem] font-bold hover:text-secondary hover:border-b-[3px] border-solid border-secondary cursor-pointer p-[3px]">
                  Add on
                </li>
              </ul>
            </section>
            <section className="dropdown-res hidden">
              <button className="menu btn-menu">List Menu</button>
            </section>

            <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-[5rem] gap-y-[5.5rem] pt-[90px] px-[5%] sm:px-[10%] md:px-0 pb-12">
              {this.state.isLoading == true ? (
                <div className="w-full h-full flex justify-center items-center px-auto ml-[900px] my-[20%]">
                  {/* <div className="w-24 h-24 border-4 border-dashed flex justify-center items-center rounded-full animate-spin dark:border-secondary "></div> */}
                  <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-secondary via-secondary to-white ">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-2 border-white"></div>
                  </div>
                </div>
              ) : (
                false
              )}

              {!this.state.isLoading &&
                this.state.data.length > 0 &&
                this.state.data?.map((product) => (
                  <CardProducts
                    key={product.id}
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
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

const NewProduct = withSearchParams(withNavigate(Products));
export default Products;
