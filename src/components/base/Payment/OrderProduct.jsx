/* eslint-disable react/prop-types */
import React from "react";

function OrderProduct(props) {
  return (
    <div className="flex mb-5 gap-3 items-center">
      <span className="w-20 h-24 rounded-3xl border overflow-hidden">
        <img
          src={props.img}
          alt="image-products"
          className="h-full object-cover w-full"
        />
      </span>
      <div className="mr-auto">
        <h3>{props.name_product}</h3>
        <p>x{props.qty}</p>
        <p>
          {props.size === 1
            ? "Regular"
            : props.size === 2
            ? "Large"
            : "Extra Large"}
        </p>
      </div>
      <h4>IDR {props.subtotal.toLocaleString("id-ID")}</h4>
    </div>
  );
}

export default OrderProduct;
