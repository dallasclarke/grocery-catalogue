import React, { Component } from "react";

//Images of food for state.
import bananas from "./img/bananas.jpeg";
import bread from "./img/bread.jpeg";
import apples from "./img/apples.jpeg";
import peanutButter from "./img/peanutbutter.jpeg";
import steak from "./img/steak.jpg";

import "./App.css";
import AddControls from "./components/Prem-Components/AddControls";
import EditControls from "./components/Prem-Components/EditControls";
import NavBar from "./components/Dallas-Components/Search/NavBar";
import ItemDisplay from "./components/Dallas-Components/ItemDisplay/ItemDisplay";

class App extends Component {
  state = {
    items: [
      {
        name: "Bananas",
        price: "$2.99",
        description: "Bundle of Bananas",
        img: bananas,
      },
      {
        name: "Bread",
        price: "$3.99",
        description: "Loaf of Bread",
        img: bread,
      },
      {
        name: "Green Apples",
        price: "$4.49",
        decription: "Bag of Apples",
        img: apples,
      },
      {
        name: "Peanut Butter",
        price: "$3.50",
        decription: "Jar of Peanut Butter",
        img: peanutButter,
      },
      {
        name: "Steak",
        price: "$15.96",
        decription: "14oz NY Strip",
        img: steak,
      },
    ],
    searchQuery: "",
  };

  render() {
    
    return (
      <div className="App">
        <h1>DUMMY TEXT</h1>
        <NavBar />
        <ItemDisplay  /> 
        <AddControls  />
        <EditControls />
      </div>
    );
  }
}

export default App;
