import React from "react";
import "./Slots.css";
export default function Slots({ slot }) {
  return (
    <div className="slot">
      <p>{slot["name"]}</p>
      <small>{slot["slots"]} </small>
      <p>
        <small>{slot["vaccine"]}</small>
      </p>
    </div>
  );
}
