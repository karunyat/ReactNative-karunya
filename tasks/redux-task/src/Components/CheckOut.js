import React from "react";
//import "./Home.css";
import { connect } from "react-redux";
const CheckOut = (props) => {
  return (
    <div>
      <form>
        <div className="container">
          <label className="uname">
            <b>No Of items in Cart :</b>
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
            required
          ></input>
          <label>
            <b>Shipping Address</b>
          </label>
          <input type="text" placeholder="Enter Address" required />
          <label className="no">
            <b>Contact No</b>
          </label>
          <input type="text" placeholder="Enter contact No" required />

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

export default connect(mapStateToProps)(CheckOut);
