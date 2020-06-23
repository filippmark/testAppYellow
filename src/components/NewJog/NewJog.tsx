import React from "react";
import cancel from "../../images/cancel.svg";

function NewJog() {
  return (
    <React.Fragment>
      <form className="form">
        <div className="form__group">
          <label className="form__label" htmlFor="distance">Distance</label>
          <input className="form__input" id="distance"></input>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="time">Time</label>
          <input className="form__input" id="time"></input>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="date">Date</label>
          <input className="form__input" id="date"></input>
        </div>
        <button className="form__save-btn"> Save </button>
        <div className="form__cancel">
            <img src={cancel} alt="close modal window" className="form__cancel-img"/>
        </div>
      </form>
    </React.Fragment>
  );
}

export default NewJog;