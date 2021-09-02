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
    // console.log(result.data);
  }

  return (
    <div className="ByPinValues">
      <h2 className="title">Search by PIN</h2>
      <small className="subTitle">
        Please enter the PIN and Date for slot booking
      </small>
      <form onSubmit={getByPin}>
        <input
          required
          className="Pin"
          type="text"
          maxLength="6"
          placeholder="Enter 6 digits PIN code"
          pattern="[0-9]{6}"
          value={PIN}
          onChange={(e) => SetPIN(e.target.value)}
        ></input>
        <input
          required
          className="date"
          type="text"
          placeholder="Enter date dd-mm-yyyy"
          pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
          value={date}
          onChange={(e) => SetDate(e.target.value)}
        ></input>
        <input type="submit" value="Search" className="search" />
      </form>
      {slots.length > 0 ? (
        <div className="slots">
          {slots.map((slot) => {
            return <Slots key={slot.session_id} slot={slot} />;
          })}
        </div>
      ) : (
        <div className="slots">
          <p className="note">No slots Avaliable</p>
        </div>
      )}
    </div>
  );
};
export default ByPin;
