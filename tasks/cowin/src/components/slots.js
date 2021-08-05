import React from "react";
import "./slots.css";
export default function Slots({ slot }) {
  return (
    <div className="slot">
      <p>{slot["name"]}</p>
      <small>{slot["slots"]}</small>
    </div>
  );
}
