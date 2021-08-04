import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import SlotBooking from "./components/slotBooking";
import cowin from "./cowin.PNG";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="logo">
          <img src={cowin} alt="COWIN" />
        </div>
        <div className="header">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/login">
            Registration/Sign-in
          </NavLink>
          {/* <NavLink activeClassName="active" to="/slotBooking">
            Slot Booking
          </NavLink> */}
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/slotBooking" component={SlotBooking}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
