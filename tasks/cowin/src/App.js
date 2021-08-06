import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import SlotBooking from "./components/SlotBooking/slotBooking";
import cowin from "./cowin.PNG";
import ByPin from "./components/SlotBooking/ByPin/byPin";
import ByDist from "./components/SlotBooking/ByDist/byDist";
const App = () => {
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
            <Route path="/byPin" component={ByPin}></Route>
            <Route path="/byDist" component={ByDist}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
