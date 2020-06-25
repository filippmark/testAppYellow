import React, { useState } from "react";
import cancel from "../../images/cancel.svg";
import { form } from "../../types/jogForm";
import DatePicker from "react-datepicker";
import { actionCreators } from "../../actions/jogs";
import { useDispatch } from "react-redux";
import "./NewJog.css";

function NewJog(props: { updateModal: (isOpen: boolean) => void }) {
  const [formData, setForm] = useState<form>({
    distance: "",
    time: "",
    date: null,
  });
  const dispatch = useDispatch();

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

  function showModal(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    props.updateModal(false);
  }

  function saveJog(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    console.log(formData);
    dispatch(
      actionCreators.addJog({
        date: !!formData.date ? formData.date.toLocaleDateString() : "",
        distance: parseFloat(formData.distance),
        time: parseInt(formData.distance),
      })
    );

    setForm({
      distance: "",
      time: "",
      date: null,
    });
  }

  return (
    <div className="form-wrapper">
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
            className="form__input form__input_date"
            id="date"
            name="date"
            onChange={dateChangeHandler}
            value={!!formData.date ? formData.date.toLocaleDateString() : ""}
          ></DatePicker>
        </div>
        <button className="form__save-btn" onClick={saveJog}>
          {" "}
          Save{" "}
        </button>
        <div className="form__cancel" onClick={showModal}>
          <img
            src={cancel}
            alt="close modal window"
            className="form__cancel-img"
          />
        </div>
      </form>
    </div>
  );
}

export default NewJog;
