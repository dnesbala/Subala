import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

import "./Product.css";

const Product = ({ product }) => {
  const { id, name, manufacturer, image, price } = product;
  const { cartItems, addToCart } = useContext(ProductContext);
  return (
    <div className="product">
      <div>
        <img src={image} alt={name} className="product__image" />
      </div>
      <div className="product__info">
        <h3>{name}</h3>
        <span>Rs. {price}</span>
      </div>
      <div className="product__moreinfo">
        <p>Manufacturer : {manufacturer}</p>
        <button
          className="button__addtocart"
          onClick={() => addToCart(id)}
          disabled={cartItems.find((item) => item.id === id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
