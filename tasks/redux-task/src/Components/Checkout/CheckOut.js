import React from "react";

import "../Login/Login.css";
import * as actionTypes from "../../Store/actions";
import { connect } from "react-redux";
const CheckOut = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
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
      <form onSubmit={onSubmitHandler}>
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: (user) => dispatch({ type: actionTypes.LOGOUT, user: user }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
