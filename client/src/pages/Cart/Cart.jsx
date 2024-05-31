import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import AppDownload from "../../components/AppDownload/AppDownload";
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="cart">
        <div className="art-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <>
                  <div className="cart-items-title cart-items-item">
                    <img src={url + "/images/" + item.image} alt="" />
                    <p>{item.name}</p>
                    <p>
                      {String.fromCharCode(8377)}
                      {item.price}
                    </p>
                    <p>{cartItems[item._id]}</p>
                    <p>
                      {String.fromCharCode(8377)}
                      {item.price * cartItems[item._id]}
                    </p>
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="cross"
                    >
                      x
                    </p>
                  </div>
                  <hr />
                </>
              );
            }
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>
                  {String.fromCharCode(8377)}
                  {getTotalCartAmount()}
                </p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery charge</p>
                <p>
                  {String.fromCharCode(8377)}
                  {getTotalCartAmount() + 75}
                </p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>
                  {String.fromCharCode(8377)}
                  {Math.round(getTotalCartAmount() * (115 / 100))}
                </p>
              </div>
            </div>
            <button onClick={() => navigate("/order")}>
              Proceed to checkout.
            </button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promo code, Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppDownload />
    </>
  );
};

export default Cart;
