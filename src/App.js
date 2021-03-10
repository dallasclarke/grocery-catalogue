import React, { Component } from "react";

//Images of food for state.
import bananas from "./img/bananas.jpeg";
import bread from "./img/bread.jpeg";
import apples from "./img/apples.jpeg";
import peanutButter from "./img/peanutbutter.jpeg";
import steak from "./img/steak.jpg";
import ItemContext from "./context/ItemContext";

import "./App.css";
import { AddControls } from "./components/Prem-Components/AddControls";
// import EditControls from "./components/Prem-Components/EditControls";
// import NavBar from "./components/Dallas-Components/Search/NavBar";
// import ItemDisplay from "./components/Dallas-Components/ItemDisplay/ItemDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

    this.addName = React.createRef();
    this.addPrice = React.createRef();
    this.addDescription = React.createRef();
    this.addImage = React.createRef();
  }

  onClickAdd = () => {
    console.log("hi");
    const newObj = {
      name: this.addName.current.value, //using refs
      // orderAmount: this.addOrderAmount.current.value,
      // orderTime: this.addOrderTime.current.value,
      // restaurantName: this.addRestaurantName.current.value,
      // id: this.state.restaurant.length + 1,
    };

    this.setState({
      items: [...this.state.items, newObj],
    });
    console.log(this.addName);
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        {/* <NavBar /> */}
        {/* <ItemDisplay  />  */}
        {/* <AddControls item={this.state.items} myNameRef={this.addName} onClickAdd={this.onClickAdd}/> */}
        {/* <div>add</div> */}
        {/* <EditControls /> */}
        <div>
          <ItemContext.Provider
            value={{
              state: this.state,
              nameRef: this.addName,
              priceRef: this.addPrice,
              descriptionRef: this.addPrice,
              imageRef: this.addImage,
              onClickAdd:this.onClickAdd
            }}
          >
            <AddControls />
          </ItemContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
