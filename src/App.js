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

import NavBar from "./components/Dallas-Components/Search/NavBar";
import ItemDisplay from "./components/Dallas-Components/ItemDisplay/ItemDisplay";

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
          id: 1,
        },
        {
          name: "Bread",
          price: "$3.99",
          description: "Loaf of Bread",
          img: bread,
          id: 2,
        },
        {
          name: "Green Apples",
          price: "$4.49",
          description: "Bag of Apples",
          img: apples,
          id: 3,
        },
        {
          name: "Peanut Butter",
          price: "$3.50",
          description: "Jar of Peanut Butter",
          img: peanutButter,
          id: 4,
        },
        {
          name: "Steak",
          price: "$15.96",
          description: "14oz NY Strip",
          img: steak,
          id: 5,
        },
      ],
      searchQuery: "",
    };

    this.addName = React.createRef();
    this.addPrice = React.createRef();
    this.addDescription = React.createRef();
    this.addImg = React.createRef();
  }

  onClickAdd = () => {
    const newObj = {
      name: this.addName.current.value,
      price: this.addPrice.current.value,
      description: this.addDescription.current.value,
      img: this.addImg.current.value,
      id: this.state.items.length + 1,
    };

    this.setState({
      ...this.state,
      items: [...this.state.items, newObj],
    });

    console.log(this.state);
  };

  onClickEdit = (id) => {
    let newArr = this.state.items.map((item) => {
      if (item.id === id) {
        item.name = this.addName.current.value;
        item.price = this.addPrice.current.value;
        item.description = this.addDescription.current.value;
        item.img = this.addImg.current.value;
        item.id = id;
      }

      return item;
    });

    this.setState({
      ...this.state,
      items: newArr,
    });
  };

  searchInputHandler = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  filterItems = () => {
    const { searchQuery, items } = this.state;

    return items.filter((item) =>
      item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  };

  render() {
    return (
      <div className="App">
        <NavBar searchInput={this.searchInputHandler} />

        <div>
          <ItemContext.Provider
            value={{
              state: this.state,
              nameRef: this.addName,
              priceRef: this.addPrice,
              descriptionRef: this.addDescription,
              imageRef: this.addImg,

              onClickAdd: this.onClickAdd,
              onClickEdit: this.onClickEdit,
            }}
          >
            <ItemDisplay items={this.filterItems()} />
            <AddControls />
          </ItemContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
