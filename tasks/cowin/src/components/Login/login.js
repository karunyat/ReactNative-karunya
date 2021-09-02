import React, { useState } from "react";
import "./login.css";

import auth from "../../auth";
const Login = (props) => {
  const [mobileNo, setMobileNo] = useState("");
  const [OTP, setOTP] = useState("");
  const [error] = useState(null);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    auth.proceedHandler(() => {
      props.history.push("./slotBooking");
    });
  };
  return (
    <div className="loginForm">
      <form className="form" onSubmit={onSubmitHandler}>
        <center>
          <h2>Register or Sign-in for vaccination</h2>

          <label>
            An OTP will be sent to your mobile number for verification{" "}
          </label>

          <input
            required
            maxLength="10"
            pattern="[0-9]{10}"
            type="text"
            placeholder="Enter 10 digits mobile number"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
          <br />
          {error && <p className="error">{error}</p>}
          {/* <button>GET OTP</button> */}

          <h2>OTP Verification</h2>

          <label>An OTP has been sent to your mobile number </label>

          <input
            required
            type="text"
            maxLength="6"
            placeholder="Enter OTP"
            value={OTP}
            onChange={(e) => setOTP(e.target.value)}
          />
          <br />

          <input type="submit" value="Verify & Proceed" className="vp" />
        </center>
      </form>
    </div>
  );
};
export default Login;
