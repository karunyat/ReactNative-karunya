import React, { useState } from "react";
import "./login.css";

import auth from "../../auth";
const Login = (props) => {
  const [mobileNo, setMobileNo] = useState("");
  const [OTP, setOTP] = useState("");
  const [error, setError] = useState(null);

  return (
    <div className="loginForm">
      <form className="form">
        <center>
          <h2>Register or Sign-in for vaccination</h2>

          <label>
            An OTP will be sent to your mobile number for verification{" "}
          </label>

          <input
            type="text"
            placeholder="Enter your mobile number"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
          <br />
          {error && <p className="error">{error}</p>}
          {/* <button>GET OTP</button> */}

          <h2>OTP Verification</h2>

          <label>An OTP has been sent to your mobile number </label>

          <input
            type="text"
            placeholder="Enter OTP"
            value={OTP}
            onChange={(e) => setOTP(e.target.value)}
          />
          <br />
          <button
            onClick={() =>
              auth.proceedHandler(() => {
                props.history.push("./slotBooking");
              })
            }
          >
            Verify & Proceed
          </button>
        </center>
      </form>
    </div>
  );
};
export default Login;
