// import React, { useState } from "react";
// import Slots from "./slots";
// import "./byDist.css";
// import axios from "axios";

// const ByDist = () => {
//   const [Dist_id, SetDist_id] = useState("");
//   const [date, SetDate] = useState("");
//   const [slots, setSlots] = useState([]);
//   const [states, setStates] = useState([]);
//   const [state_id, setState_id] = useState("");
//   const [Districts, setDistricts] = useState([]);

//   var urlByDist_id = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${Dist_id}&date=${date}`;

//   var urlgetStates = `https://cdn-api.co-vin.in/api/v2/admin/location/states`;

//   var urlgetDists = `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state_id}`;

//   async function getByDist_id(e) {
//     e.preventDefault();
//     var result = await axios.get(urlByDist_id);
//     setSlots(result.data.sessions);
//     console.log(result.data);
//   }
//   async function getStates(e) {
//     e.preventDefault();
//     var result = await axios.get(urlgetStates);
//     setStates(result.data.states.state_name);
//     console.log(result.data);
//   }
//   async function getDist(e) {
//     e.preventDefault();
//     var result = await axios.get(urlgetDists);
//     setDistricts(result.data.districts);
//     console.log(result.data.districts);
//   }
//   return (
//     <div className="ByDistValues">
//       <h2 className="title">Search by District</h2>
//       <small className="subTitle">
//         Please enter the District and Date for slot booking
//       </small>
//       <form>
//         {/* <input
//           className="Dist"
//           type="text"
//           placeholder="Enter District Code"
//           value={Dist}
//           onChange={(e) => SetDist(e.target.value)}
//         ></input>
//         <input
//           className="date"
//           type="text"
//           placeholder="Enter date dd-mm-yyyy"
//           value={date}
//           onChange={(e) => SetDate(e.target.value)}
//         ></input> */}
//         <select
//           onClick={getStates}
//           className="select"
//           onChange={(e) => setState_id(e.target.value)}
//         >
//           <option value="">Select State</option>
//           {states.map((state, i) => (
//             <option key={i} value={state.state_id}>
//               {state.state_name}
//             </option>
//           ))}
//         </select>
//         <select
//           onClick={getDist}
//           className="select"
//           onChange={(e) => SetDist_id(e.target.value)}
//         >
//           <option value="">Select District</option>
//           {Districts.map((District, i) => (
//             <option key={i} value={District.district_id}>
//               {District.district_name}
//             </option>
//           ))}
//         </select>
//         <input
//           className="date"
//           type="text"
//           placeholder="Enter date dd-mm-yyyy"
//           value={date}
//           onChange={(e) => SetDate(e.target.value)}
//         ></input>
//         <button className="searchBtn" onClick={getByDist_id}>
//           Search
//         </button>
//       </form>
//       <div className="slots">
//         {slots.map((slot) => {
//           return <Slots key={slot.center_id} slot={slot} />;
//         })}
//       </div>
//       <p className="note">No more vaccination centers Avaliable....</p>
//     </div>
//   );
// };
// export default ByDist;

import React, { useState } from "react";
import Slots from "./slots";
import "./byDist.css";
import axios from "axios";

const ByDist = (props) => {
  const [Dist_id, SetDist_id] = useState("");
  const [date, SetDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [States, setStates] = useState([]);
  const [state_id, setState_id] = useState("");
  const [Districts, setDistricts] = useState([]);

  var urlByDist = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${Dist_id}&date=${date}`;

  var urlgetStates = `https://cdn-api.co-vin.in/api/v2/admin/location/states`;

  var urlgetDist = `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state_id}`;

  async function getByDist(e) {
    e.preventDefault();
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

      <p className="note">No more vaccination centers Avaliable....</p>
    </div>
  );
};
export default ByDist;
