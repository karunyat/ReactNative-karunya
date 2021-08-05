import React, { useState } from "react";
import Slots from "./slots";
import "./byDist.css";
import axios from "axios";

const ByDist = () => {
  const [Dist, SetDist] = useState("");
  const [date, SetDate] = useState("");
  const [slots, setSlots] = useState([]);
  //   const [states, setStates] = useState([]);
  var urlDist = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${Dist}&date=${date}`;
  //   var urlStates = `https://cdn-api.co-vin.in/api/v2/admin/location/states`;
  async function getByDist(e) {
    e.preventDefault();
    var result = await axios.get(urlDist);
    setSlots(result.data.sessions);
    console.log(result.data);
  }
  //   async function getStates(e) {
  //     e.preventDefault();
  //     var result = await axios.get(urlStates);
  //     setStates(result.data.states.state_name);
  //     console.log(result.data);
  //   }

  return (
    <div className="ByDistValues">
      <h2 className="title">Search by District</h2>
      <small className="subTitle">
        Please enter the District and Date for slot booking
      </small>
      <form>
        <input
          className="Dist"
          type="text"
          placeholder="Enter District Code"
          value={Dist}
          onChange={(e) => SetDist(e.target.value)}
        ></input>
        <input
          className="date"
          type="text"
          placeholder="Enter date dd-mm-yyyy"
          value={date}
          onChange={(e) => SetDate(e.target.value)}
        ></input>

        <button className="searchBtn" onClick={getByDist}>
          Search
        </button>
      </form>
      <div className="slots">
        {slots.map((slot) => {
          return <Slots key={slot.center_id} slot={slot} />;
        })}
      </div>
    </div>
  );
};
export default ByDist;
