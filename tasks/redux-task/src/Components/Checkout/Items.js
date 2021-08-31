import React from "react";
import "./Items.css";
const Item = (props) => (
  <div className="Item">
    <img src={props.img} className="item_img" />
    <div className="item_details">
      <h3>{props.breed}</h3>

      <div>
        {" "}
        {/* <button className="ctrl_btns">ADD</button> */}
        <button className="ctrl_btns" onClick={props.removed}>
          REMOVE
        </button>
      </div>
    </div>
  </div>
);

export default Item;
