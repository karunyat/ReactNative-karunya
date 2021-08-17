import React, { useState } from "react";
import Slots from "../Slots";
import "./ByDist.css";
import axios from "axios";

const ByDist = (props) => {
  const [Dist_id, SetDist_id] = useState("");
  const [date, SetDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [States, setStates] = useState([]);
  const [state_id, setState_id] = useState("");
  const [Districts, setDistricts] = useState([]);
  const Days = [...Array(31 + 1).keys()].slice(1);
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = ["2021", "2022", "2023"];
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  var urlByDist = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${Dist_id}&date=${date}`;

  var urlgetStates = `https://cdn-api.co-vin.in/api/v2/admin/location/states`;

  var urlgetDist = `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state_id}`;

  async function getByDist(e) {
    e.preventDefault();
    SetDist_id(`${Dist_id}`);
    SetDate(`${day}-${month}-${year}`);
    var result = await axios.get(urlByDist);

    setSlots(result.data.sessions);
    //console.log(result.data);
  }
  async function getStates(e) {
    e.preventDefault();
    var result = await axios.get(urlgetStates);
    setStates(result.data.states);
    //console.log(result.data.states);
  }

  async function getDist(e) {
    e.preventDefault();

    var result = await axios.get(urlgetDist);
    setDistricts(result.data.districts);
    //console.log(result.data.districts);
  }
  return (
    <div className="ByDistValues">
      <h2 className="title">Search by District</h2>
      <small className="subTitle">
        Please enter the District and Date for slot booking
      </small>

      <form>
        <select
          onClick={getStates}
          className="select"
          onChange={(e) => setState_id(e.target.value)}
        >
          <option value="">Select State</option>
          {States.map((state, i) => (
            <option key={i} value={state.state_id}>
              {state.state_name}
            </option>
          ))}
        </select>
        <select
          onClick={getDist}
          className="select"
          onChange={(e) => SetDist_id(e.target.value)}
        >
          <option value="">Select District</option>
          {Districts.map((District, i) => (
            <option key={i} value={District.district_id}>
              {District.district_name}
            </option>
          ))}
        </select>
        <br />
        <select className="select" onChange={(e) => setDay(e.target.value)}>
          <option value="">DD</option>
          {Days.map((day, i) => (
            <option key={i} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select className="select" onChange={(e) => setMonth(e.target.value)}>
          <option value="">MM</option>
          {Months.map((month, i) => (
            <option key={i} value={i + 1}>
              {month}
            </option>
          ))}
        </select>
        <select className="select" onChange={(e) => setYear(e.target.value)}>
          <option value="">Year</option>
          {years.map((year, i) => (
            <option key={i} value={year}>
              {year}
            </option>
          ))}
        </select>
        {/* <input
          className="date"
          type="text"
          placeholder="Enter date dd-mm-yyyy"
          value={date}
          onChange={(e) => SetDate(e.target.value)}
        ></input> */}

        <button className="searchBtn" onClick={getByDist}>
          Search
        </button>
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
export default ByDist;
