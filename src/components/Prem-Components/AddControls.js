import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";
import ItemContext from "../../context/ItemContext";

export const AddControls = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <ItemContext.Consumer>
        {(context) => {
          return (
            <Modal isOpen={modalShow} className="generic">
              <div
              //   className="generic"
              >
                <button
                  onClick={() => setModalShow(false)}
                  style={{ float: "right" }}
                >
                  x
                </button>
                <div style={{ textAlign: "center" }}>add</div>

                {/* <div className="myForm1"> */}
                <div className="myForm">
                  <label className="l1 grid-item ">name</label>
                  <input
                    className="i1 grid-item"
                    ref={context.nameRef}
                    type="text"
                  ></input>

                  <label className="l2 grid-item">price</label>
                  <input
                    className="i2 grid-item"
                    ref={context.priceRef}
                    type="text"
                  ></input>

                  <label className="l3 grid-item">description</label>
                  <textarea
                    className="i3 grid-item"
                    ref={context.descriptionRef}
                    type="text"
                    style={{ resize: "none" }}
                  ></textarea>

                  <label className="l4 grid-item">image link</label>
                  <input
                    className="i4 grid-item"
                    ref={context.imageRef}
                  ></input>

                </div>
                 
                 <div className='btn'>
                      <button
                    className="submit grid-item"
                    onClick={context.onClickAdd}
                    // style={{ display: "flex", justifyContent: "center" }}
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
