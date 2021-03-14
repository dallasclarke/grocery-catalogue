import React, { useState } from "react";

import "./ItemDisplay.css";
import ItemContext from "../../../context/ItemContext";
import { EditControls } from "../../Prem-Components/EditControls";

function ItemDisplay(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = props.items.slice(indexOfFirstItem, indexOfLastItem);

  const displayItems = currentItem.map((item) => {
    return (
      <div className="items">
        <li>{item.name}</li>
        <img src={item.img} />
        <li>{item.description}</li>
        <EditControls data={item} />
      </div>
    );
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const renderPageNumber = pageNumbers.map((number) => {
    return (
      <li key={number} id={number} onClick={handleClick}>
        {number}
      </li>
    );
  });

  return (
    <div>
      <div className="item-display">
        <ul>{displayItems}</ul>
        <ul>{renderPageNumber}</ul>
      </div>
    </div>
  );
}

export default ItemDisplay;
