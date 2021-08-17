import React from "react";
import "./Home.css";
const Home = (props) => {
  const bookSlotHandler = () => {
    props.history.push("/login");
  };
  return (
    <div className="Card">
      <p>Are you Protected Against COVID-19?</p>

      <button className="SlotBtn" onClick={bookSlotHandler}>
        BOOK YOUR SLOT
      </button>
    </div>
  );
};
export default Home;
