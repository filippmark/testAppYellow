import React, { useState } from "react";
import Modal from "react-modal";
import cancel from "../../images/cancel.svg";
import { form } from "../../types/jogForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./NewJog.css";

function NewJog() {
  const [formData, setForm] = useState<form>({
    distance: "",
    time: "",
    date: null,
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function dateChangeHandler(
    date: Date | null,
    event: React.SyntheticEvent<any, Event> | undefined
  ) {
    setForm({
      ...formData,
      date: date,
    });
  }

  return (
    <React.Fragment>
      <form className="form">
        <div className="form__group">
          <label className="form__label" htmlFor="distance">
            Distance
          </label>
          <input
            className="form__input"
            id="distance"
            name="distance"
            value={formData.distance}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="time">
            Time
          </label>
          <input
            className="form__input"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="date">
            Date
          </label>
          <DatePicker
            className="form__input"
            id="date"
            name="date"
            onChange={dateChangeHandler}
            value={!!formData.date ? formData.date.toLocaleDateString() : ""}
          ></DatePicker>
        </div>
        <button className="form__save-btn"> Save </button>
        <div className="form__cancel">
          <img
            src={cancel}
            alt="close modal window"
            className="form__cancel-img"
          />
        </div>
      </form>
    </React.Fragment>
  );
}

export default NewJog;
