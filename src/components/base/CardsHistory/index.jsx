/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useMemo, useEffect, useState } from "react";
import { deleteTransaction } from "../../../utils/https/transactions";
import { useSelector, useDispatch } from "react-redux";
import { historyAction } from "../../../Redux/slices/history";

function CardHist(props, idx) {
  const controller = useMemo(() => new AbortController(), []);
  const [isAction, setIsAction] = useState(false);
  const [deleted, setDeleted] = useState("");
  const dispatch = useDispatch();
  const [dataHistory, setDataHistory] = useState([]);

  const handleCard = (event) => {
    event.preventDefault();
    setIsAction(true);
    setDeleted(props.id);
    console.log(deleted);
  };
  const handleCancel = (event) => {
    event.stopPropagation();
    setIsAction(false);
  };
  const userData = useSelector((state) => state.user.data);
  console.log(typeof props.handleDelete, "del");

  return (
    <div
      onClick={handleCard}
      className={`${
        isAction ? "bg-white/60" : "bg-white"
      } w-[394px] min-h-[130px] px-5 flex rounded-2xl items-center relative cursor-pointer`}
      id={props.id}
    >
      <div className="w-[75px] h-[75px] rounded-full border mr-4 overflow-hidden">
        <img
          src={props.image}
          alt="image-products"
          className={isAction ? "opacity-60" : ""}
        />
      </div>
      <div className="w-2/3">
        <h2 className="font-bold text-2xl">{props.name_product}</h2>
        <p className="text-secondary">
          IDR {props.price.toLocaleString("id-ID")}
        </p>
        <p className="text-secondary">Delivered</p>
      </div>
      {isAction && (
        <div className="absolute -top-5 -right-5 flex gap-3">
          <button
            onClick={() => props.handleDelete(props.id)}
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
