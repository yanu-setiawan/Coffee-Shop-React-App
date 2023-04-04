/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useMemo, useEffect, useState } from "react";
import { deleteTransaction } from "../../../utils/https/transactions";
import { useSelector } from "react-redux";

function CardHist(props) {
  const controller = useMemo(() => new AbortController(), []);
  const [isAction, setIsAction] = useState(false);

  const handleCard = () => {
    setIsAction(true);
  };
  const handleCancel = (event) => {
    event.stopPropagation();
    setIsAction(false);
  };
  const userData = useSelector((state) => state.user.data);
  console.log();

  const deleteHandle = async () => {
    try {
      //  console.log(props.transactionId, props.prodId, controller);
      const result = await deleteTransaction(
        props.transactionId,
        props.prodId,
        controller,
        userData.token
      );
      // console.log(result);
      if (result.status === 200) {
        console.log("data terhapus");
        props.onDelete();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={handleCard}
      className={`${
        isAction ? "bg-white/60" : "bg-white"
      } w-[394px] min-h-[130px] px-5 flex rounded-2xl items-center relative cursor-pointer`}
    >
      <div className="w-[75px] h-[75px] rounded-full border mr-4 overflow-hidden">
        <img
          src={props.image}
          alt="image-products"
          className={isAction && "opacity-60"}
        />
      </div>
      <div className="w-2/3">
        <h2 className="font-bold text-2xl">{props.name_product}</h2>
        <p className="text-secondary">
          IDR {props.price.toLocaleString("id-ID")}
        </p>
        <p className="text-secondary">
          {/* {props.methodDeliv}
          at {new Date(props.orderAt).toLocaleDateString()} */}
          Delivered
        </p>
      </div>
      {isAction && (
        <div className="absolute -top-5 -right-5 flex gap-3">
          <button
            onClick={deleteHandle}
            className="btn w-10 h-10 rounded-full bg-secondary"
          >
            <i className="bi bi-trash3 text-white text-lg"></i>
          </button>
          <button
            onClick={handleCancel}
            className="btn w-10 h-10 rounded-full bg-yellow"
          >
            <i className="bi bi-x text-secondary text-3xl"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default CardHist;
