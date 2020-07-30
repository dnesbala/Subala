import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { ProductContext } from "../../context/ProductContext";

import "./Cart.css";
const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart,
  } = useContext(ProductContext);

  const totalItems = () => {
    const quantities = cartItems.map((item) => item.quantity);
    return quantities.reduce((acc, val) => acc + val, 0);
  };

  const totalPrice = () => {
    const amounts = cartItems.map((item) => item.total_price);
    return amounts.reduce((acc, val) => acc + val, 0);
  };

  const handleToken = (token, addresses) => {
    // console.log(token, addresses);
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <>
          <table className="cart__table">
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart__image"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>Rs. {item.price}</td>
                  <td>
                    <button
                      className="cart__button"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      <AiOutlinePlusCircle />
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      className="cart__button"
                      disabled={item.quantity === 0}
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      <AiOutlineMinusCircle />
                    </button>
                  </td>
                  <td>Rs. {item.total_price}</td>
                  <td>
                    <AiFillDelete
                      className="cart__button cart__delete__button"
                      onClick={() => deleteFromCart(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart__summary">
            <h2>Cart Summary</h2>
            <p>Total Items = {totalItems()}</p>
            <p>Total Price = Rs. {totalPrice()}</p>
            <StripeCheckout
              stripeKey="pk_test_51HAXtpE3oRxkrtKjy21lDAnLp0gWoHilj2LjO9OSxFa5c7kQ5z6zElyjsbhyO5cJT3LfhkW5QwuHApInW9tN1MAw002gLQ3fJR"
              token={handleToken}
              amount={totalPrice()}
              billingAddress
              shippingAddress
            />
          </div>
        </>
      ) : (
        <h2 className="cart__empty">
          Cart Is Currently Empty. Please add the items.
        </h2>
      )}
    </>
  );
};

export default Cart;
