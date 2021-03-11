import React from "react";
import "./ItemDisplay.css";
import ItemContext from "../../../context/ItemContext";
import { EditControls } from "../../Prem-Components/EditControls";

function ItemDisplay(props) {
  return (
    <div>
      <div className="item-display">
        <ul>
          {props.items.map((item) => (
            <div className="items">
              <li>{item.name}</li>
              <img src={item.img} />
              <li>{item.price}</li>
              <li>{item.description}</li>
              {/* changes by p */}
              <EditControls data={item}/>
            </div>
          ))}
        </ul>
      </div>
      )}
    </div>
  );
}

export default ItemDisplay;
