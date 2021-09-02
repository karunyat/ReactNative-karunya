import { useState } from "react";
import "./Login.css";
import Auth from "../../Auth";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/actions";
const Login = (props) => {
  const [user, setUser] = useState("");
  const Dogs_URL = "https://dog.ceo/api/breeds/image/random/10";
  const loadData = async () => {
    const res = await fetch(Dogs_URL);
    const data = await res.json();
    // console.log(data.message);
    // const Dogs = data.message;

    var Dogs = data.message.map(function (dog, i) {
      return { id: i, img: dog, key: Math.random() };
    });
    // console.log("Dogs:", Dogs);

    props.onLoadDogs(Dogs);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onNewUser(user);
    Auth.LoginHandler(() => {
      props.history.push("/Home");
    });

    loadData();
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
    Dgs: state.Dogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNewUser: (user) => dispatch({ type: actionTypes.SET_USER, user: user }),
    onLoadDogs: (Dogs) => dispatch({ type: actionTypes.LOAD_DOGS, Dogs: Dogs }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
