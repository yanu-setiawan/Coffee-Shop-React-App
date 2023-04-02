/* eslint-disable react/prop-types */
import React, { Component } from "react";
import withNavigate from "../../../utils/wrapper/withNavigate";
// import food from "../../assets/menu/imggg.png";

export class CardProducts extends Component {
  handleNavigate(to) {
    this.props.navigate(to);
  }

  render() {
    return (
      <div
        onClick={() => this.handleNavigate(`/product-details/${this.props.id}`)}
        className="w-40 h-52 p-4 pt-0 rounded-3xl shadow-lg relative flex flex-col justify-end items-center transition duration-150 hover:scale-[1.1] hover:ease-in-out "
      >
        <div className="w-32 h-32 top-[-55px] absolute rounded-full overflow-hidden border">
          <img src={this.props.image} alt="" className="w-full h-auto" />
        </div>
        <h2 className="font-black text-xl text-center mb-1">
          {this.props.prodName}
        </h2>
        <h3 className="font-bold text-lg text-secondary">
          IDR {this.props.price}
        </h3>
      </div>
    );
  }
}

export default withNavigate(CardProducts);
