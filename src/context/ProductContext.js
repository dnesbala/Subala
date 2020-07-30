import React, { createContext, useState, useEffect } from "react";
import { products } from "../data/products";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [productItems, setProductItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setProductItems(products);
  }, []);

  const addToCart = (id) => {
    const tempProducts = [...productItems];
    const item = tempProducts.find((product) => product.id === id);
    item.quantity += 1;
    item.total_price += item.price;
    setCartItems([...cartItems, item]);
  };

  const increaseQuantity = (id) => {
    const tempProducts = [...productItems];
    const item = tempProducts.find((product) => product.id === id);
    item.quantity += 1;
    item.total_price += item.price;
    setCartItems([...cartItems]);
  };

  const decreaseQuantity = (id) => {
    const tempProducts = [...productItems];
    const item = tempProducts.find((product) => product.id === id);
    item.quantity -= 1;
    item.total_price -= item.price;
    setCartItems([...cartItems]);
  };

  const deleteFromCart = (id) => {
    const tempCartProducts = [...cartItems];
    const items = tempCartProducts.filter((product) => product.id !== id);
    setCartItems(items);
  };

  return (
    <ProductContext.Provider
      value={{
        productItems,
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        deleteFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
