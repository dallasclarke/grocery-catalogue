import React from "react";
import "./ItemDisplay.css";


function ItemDisplay(props) {
  return (
    <div className="item-display">
      <ul>
        {props.items.map((item) => (
          <div className="items">
            <li>{item.name}</li>
            <img src={item.img} />
            <li>{item.price}</li>
            <li>{item.description}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ItemDisplay;
