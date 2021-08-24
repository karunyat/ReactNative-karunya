import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.PNG";

import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import CheckOut from "./Components/Checkout/CheckOut";
function App() {
  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        <div className="header">
          <div className="logo">
            <img src={logo} alt="Dogs-N-Pups" />
          </div>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/Home" component={Home}></Route>
            <Route path="/CheckOut" component={CheckOut}></Route>
            <Route path="/Login" component={Login}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
