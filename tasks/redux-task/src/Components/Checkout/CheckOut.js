import React from "react";

import "../Login/Login.css";
import "./Items.css";
import * as actionTypes from "../../Store/actions";
import { connect } from "react-redux";
import Item from "./Items";
const CheckOut = (props) => {
  const onRemoveHandler = (key) => {
    props.onRemoveDog(key);
    props.onCartUpdate();
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    return alert("Your Order has been successfully placed!!");
  };
  const onLogoutHandler = () => {
    props.onLogout();
    props.history.push("/Login");
  };
  return (
    <div>
      <button className="logoutBtn" onClick={onLogoutHandler}>
        {" "}
        LOGOUT{" "}
      </button>
      {props.selected_items.map((item) => (
        <Item
          breed={item.img.substr(30, item.img.lastIndexOf("/") - 30)}
          img={item.img}
          removed={() => onRemoveHandler(item.key)}
        />
      ))}
      <form className="Checkout_form" onSubmit={onSubmitHandler}>
        <div className="container">
          <label className="uname">
            <b>Items in CART :</b>
          </label>
          <span> {props.crt}</span>
          <label className="uname">
            <br />
            <b>Username</b>
          </label>
          <input
            type="text"
            value={props.usr}
            placeholder="Enter your Name"
          ></input>
          <label>
            <b>Shipping Address</b>
          </label>
          <input type="text" placeholder="Enter state" required />
          <input type="text" placeholder="Enter city" required />
          <input type="text" placeholder="Enter street" required />
          <input type="text" placeholder="Enter flat No/Door No" required />
          <input
            type="text"
            placeholder="Enter PINCODE"
            required
            pattern="[0-9]{6}"
          />
          <label className="no">
            <b>Contact No</b>
          </label>
          <input
            type="text"
            placeholder="Enter contact No"
            required
            pattern="[0-9]{10}"
            maxLength="10"
          />

          <button className="checkOutBtn" type="submit">
            PLACE ORDER
          </button>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    usr: state.user,
    crt: state.cart,
    selected_items: state.selected_items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveDog: (itemkey) =>
      dispatch({ type: actionTypes.REMOVE_DOG, itemKey: itemkey }),
    onLogout: (user) => dispatch({ type: actionTypes.LOGOUT, user: user }),
    onCartUpdate: () => dispatch({ type: actionTypes.UPDATE_CART }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
