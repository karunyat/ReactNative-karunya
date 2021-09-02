import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.PNG";

import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import CheckOut from "./Components/Checkout/CheckOut";
import { ProtectedRoute } from "./ProtectedRoute";
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
            <ProtectedRoute path="/Home" component={Home}></ProtectedRoute>
            <ProtectedRoute
              path="/CheckOut"
              component={CheckOut}
            ></ProtectedRoute>
            <ProtectedRoute path="/Login" component={Login}></ProtectedRoute>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
