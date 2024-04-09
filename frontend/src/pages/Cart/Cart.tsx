import React, { useContext } from "react";
import { StoreContext } from "../../component/Content/StoreContext";
import { food_list } from "../../assets/assets";

const Cart = () => {
  const { cartItems } = useContext(StoreContext);

  return (
    <div>
      <div className="cart">
        <div className="cart-item">
          <div className="cart-item-title">
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
      </div>
    </div>
  );
};

export default Cart;
