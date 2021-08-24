import { useState } from "react";
import "./Login.css";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/actions";
const Login = (props) => {
  const [user, setUser] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onNewUser(user);
    props.history.push("/Home");
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="container">
          <label className="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            required
            onChange={(e) => setUser(e.target.value)}
          />

          <label className="psw">
            <b>Password</b>
          </label>
          <input type="password" placeholder="Enter Password" required />

          <button className="loginBtn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNewUser: (user) => dispatch({ type: actionTypes.SET_USER, user: user }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
