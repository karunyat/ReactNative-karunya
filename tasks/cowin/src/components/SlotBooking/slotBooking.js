import React from "react";

import "./slotBooking.css";

const SlotBooking = (props) => {
  const byPinHandler = () => {
    props.history.push("/byPin");
  };
  const byDistHandler = () => {
    props.history.push("/byDist");
  };

  return (
    <div className="Booking">
      <center>
        <h2>Book Appointment</h2>
      </center>

      <small>
        The slots availability data displayed in the pincode or district search
        is provided by the state govt and private hospitals. CoWIN does not
        create this data, therefore we cannot guarantee that it is the most
        recent and accurate data.
      </small>
      <br />
      <div className="ctrlOptions">
        <button className="ByPIN" onClick={byPinHandler}>
          Search by PIN
        </button>

        <button className="ByDist" onClick={byDistHandler}>
          Search by District
        </button>
      </div>
    </div>
  );
};
export default SlotBooking;
