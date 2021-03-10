import React, { useState } from "react";
import Modal from "react-modal";
import './style.css'
import ItemContext from '../../context/ItemContext'

export const AddControls = (props) => {
//   console.log(props);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
        <ItemContext.Consumer>
        {(context) => {
            console.log(context) 
         return ( 
       
      <Modal isOpen={modalShow} className="generic">
        <div className="generic">
          <button
            onClick={() => setModalShow(false)}
            style={{ float: "right" }}
          >
            x
          </button>
          <div style={{textAlign:'center'}}>add</div>
          {/* {
        name: "Bananas",
        price: "$2.99",
        description: "Bundle of Bananas",
        img: bananas,
      }, */}

          <div className="generic">
            <div>
              <label>name</label>
              <input
                ref={context.nameRef}
                type="text"
              ></input>
              <label>price</label>
              <input
                ref={context.priceRef}
                type="text"
              ></input>
              <label>description</label>
              <textarea
                ref={context.descriptionRef}
                type="text"
                style={{resize:'none'}}
              ></textarea>
              <label>image link</label>
              <input
                ref={context.imageRef}
                type='text'
              ></input>

              {/* <label>order amount.</label>
              <input ref={this.addOrderAmount} type="text"></input>
              <label>order time</label>
              <input ref={this.addOrderTime} type="text"></input>
              <label>restaurant name</label>
              <input ref={this.addRestaurantName} type="text"></input> */}
            </div>
            <button
              className="submit"
                onClick={context.onClickAdd}
            >
              submit
            </button>
          </div>
        </div>
      </Modal>
       );
    }}
  </ItemContext.Consumer> 
      <button onClick={() => setModalShow(true)}>add </button>
    </div>
  );
};
