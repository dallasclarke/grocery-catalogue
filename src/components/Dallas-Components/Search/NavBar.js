import React from "react"


function NavBar(props) {
    return (
        <div>
            <input type="text" placeholder="Search Items" onChange={props.searchInput} />
        </div>
    )
}

export default NavBar;