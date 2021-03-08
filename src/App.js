import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    items: [
      {name: "Bananas", price: "$2.99", description: "Bundle of Bananas", img: "",},
      {name: "Bread", price: "$3.99", description: "Loaf of Bread", img: "" },
      {name: "Green Apples", price: "$4.49", decription: "Bag of Apples", img: ""},
      {name: "Peanut Butter", price: "$3.50", decription: "Jar of Peanut Butter", img: ""},
      {name: "Steak", price: "$15.96", decription: "14oz NY Strip", img: ""}
    ],
    searchQuery: ""
  }


  render() {
    return (
      <div className="App">
        <h1>DUMMY TEXT</h1>
      </div>
    )
  }
}

export default App;
