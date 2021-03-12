import React, { useState } from "react";
import ItemContext from "../../context/ItemContext";
import Modal from "react-modal";

export const EditControls = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <ItemContext.Consumer>
      {(context) => {
        return (
          <div>
            <Modal isOpen={modalShow} className="generic">
              <div>
                <button
                  onClick={() => setModalShow(false)}
                  style={{ float: "right" }}
                >
                  x
                </button>

                <div style={{ textAlign: "center" }}>Edit</div>

                {/* <div className="myForm1"> */}
                <div className="myForm">
                  <label className="l1 grid-item ">name</label>
                  <input
                    className="i1 grid-item"
                    ref={context.nameRef}
                    type="text"
                    placeholder={props.data.name}
                  />

                  <label className="l2 grid-item">price</label>
                  <input
                    className="i2 grid-item"
                    ref={context.priceRef}
                    type="text"
                    placeholder={props.data.price}
                  ></input>

                  <label className="l3 grid-item">description</label>
                  <textarea
                    className="i3 grid-item"
                    ref={context.descriptionRef}
                    type="text"
                    style={{ resize: "none" }}
                    placeholder={props.data.description}
                  ></textarea>

                  <label className="l4 grid-item">image link</label>
                  <input
                    className="i4 grid-item"
                    ref={context.imageRef}
                    type="text"
                  ></input>
                </div>

                <div className="btn">
                  <button
                    className="submit grid-item"
                    onClick={() => context.onClickEdit(props.data.id)}
                  >
                    submit
                  </button>
                </div>
              </div>
            </Modal>
            <button className='editBtn' onClick={() => setModalShow(true)}>Edit</button>
          </div>
        );
      }}
    </ItemContext.Consumer>
  );
};
