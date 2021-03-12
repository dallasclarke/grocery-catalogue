import React from "react"
import "./NavBar.css"

function NavBar(props) {
    return (
      <div className="bar">
          <h2>Catalogue</h2>
        <div className="search">
            <h3>Search</h3>
          <div>
            <input
              type="text"
              placeholder="Search..."
              onChange={props.searchInput}
            />
          </div>
        </div>
      </div>
    );
}

export default NavBar;