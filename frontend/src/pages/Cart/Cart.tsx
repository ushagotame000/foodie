import React, { useContext } from "react";
import { StoreContext } from "../../component/Content/StoreContext";
import { food_list } from "../../assets/assets";
import Footer from "../../component/Footer/Footer";

const Cart = () => {
  const { cartItems } = useContext(StoreContext);

  return (
    <div>
      <div className="cart  mt-24 ml-24">
        <div className="cart-item ">
          <div className="cart-item-title grid grid-flow-col items-center text-gray-500 font-sans text-xl">
            <p>Item</p>
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
                <div className="cart-item-title" key={index}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p>X</p>
                </div>
              );
            }
          })}
        </div>

        <div className="cart-bottom mt-16 flex justify-between gap-5">
          <div className="cart-total flex-1 flex-col gap-5">
            <h2 className="font-bold font-sans text-3xl py-4"> Cart Total</h2>

            <div>
              <div className="cart-total-details flex justify-between text-gray-600">
                <p>Subtotal</p>
                <p>{0}</p>
              </div>

              <div className="cart-total-details flex justify-between text-gray-600">
                <p>Delivery Fee</p>
                <p>{2}</p>
              </div>
              <hr className="mx-3 my-0 " />
              <div className="cart-total-details flex justify-between text-gray-600">
                <b>Total</b>
                <b>{0}</b>
              </div>
            </div>

            <button className="border-none bg-orange-400 m-5 px-6 py-0 h-9 rounded-md cursor-pointer text-white hover:bg-orange-500">
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="promocode flex-1 ">
            <div>
              <p className="text-gray-700 font-sans  font-semibold ">
                If you have a promo code, Enter it here
              </p>
              <div className="promo-input mt-3 flex justify-between items-center bg-slate-200 rounded-md">
                <input
                  type="text"
                  placeholder="promo code"
                  className="bg-transparent border-none outline-none py-2"
                />
                <button className=" w-28 px-3 py-1 bg-gray-800 border-none text-white rounded-md hover:bg-black">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
