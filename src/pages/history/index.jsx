/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import Header from "../../components/templates/Header";
import Footer from "../../components/templates/Footer";
import { getHistory } from "../../utils/https/transactions";
import Loader from "../../components/base/Loader";
import ModaltoCart from "../../components/base/Modal/ModalToCart";
import CardHist from "../../components/base/CardsHistory";
import { useSelector } from "react-redux";

function History() {
  const controller = useMemo(() => new AbortController(), []);
  const [dataHistory, setDataHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const userData = useSelector((state) => state.user.data);

  const handleDelete = () => {
    setIsDelete(true);
  };
  const fetchDataHistory = async () => {
    setIsLoading(true);
    try {
      const result = await getHistory(controller, userData.token);
      setDataHistory(result.data.data);
      console.log(result.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    document.title = "Coffee Shop - History";
    fetchDataHistory();
  }, [isDelete]);
  return (
    <>
      {isLoading && <Loader />};
      <Header />
      <main className="w-full h-full py-6 lg:px-32 lg:py-24 lg:gap-7 bg-history bg-cover bg-center">
        <section className="modal hidden" id="modal">
          <div className="modal-content" id="modal-content">
            <p className="items-center">
              Are you sure want to delete <br />
              the selected items?
            </p>
          </div>
        </section>
        <div className="head flex flex-col gap-1 justify-center font-semibold items-center mb-20">
          <p className="text-white text-[20px] lg:text-[40px]">
            Let’s see what you have bought!
          </p>
          <p className="text-white text-[15px] lg:text-[20px]">
            Long press to delete item
          </p>
        </div>
        <div className="w-full justify-items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 mb-16">
          {dataHistory.length > 0 &&
            dataHistory.map((product, idx) => (
              <CardHist
                key={idx}
                product_id={product.product_id}
                transaction_Id={product.history_id}
                name_product={product.name_product}
                image={product.image}
                price={product.price}
                methodDeliv={product.method}
                orderAt={product.created_at}
                // onDelete={handleDelete}
              />
            ))}
          <ModaltoCart
            msg="Data Deleted..."
            isOpen={isDelete}
            onClose={() => setIsDelete(false)}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 place-items-center md:grid-cols-2 lg:grid-cols-3"></div>
      </main>
      <Footer />
    </>
  );
}

export default History;
