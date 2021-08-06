import React, { useState } from "react";
import Slots from "../slots";
import "./byPin.css";
import axios from "axios";

const ByPin = () => {
  const [PIN, SetPIN] = useState("");
  const [date, SetDate] = useState("");
  const [slots, setSlots] = useState([]);
  var urlpin = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${PIN}&date=${date}`;
  async function getByPin(e) {
    e.preventDefault();
    var result = await axios.get(urlpin);
    setSlots(result.data.sessions);
    //console.log(result.data);
  }
  return (
    <div className="ByPinValues">
      <h2 className="title">Search by PIN</h2>
      <small className="subTitle">
        Please enter the PIN and Date for slot booking
      </small>
      <form>
        <input
          className="Pin"
          type="text"
          placeholder="Enter PIN"
          value={PIN}
          onChange={(e) => SetPIN(e.target.value)}
        ></input>
        <input
          className="date"
          type="text"
          placeholder="Enter date dd-mm-yyyy"
          value={date}
          onChange={(e) => SetDate(e.target.value)}
        ></input>
        <button className="searchBtn" onClick={getByPin}>
          Search
        </button>
      </form>
      <div className="slots">
        {slots.map((slot) => {
          return <Slots key={slot.center_id} slot={slot} />;
        })}
      </div>
      <p className="note">No more vaccination centers Avaliable....</p>
    </div>
  );
};
export default ByPin;
