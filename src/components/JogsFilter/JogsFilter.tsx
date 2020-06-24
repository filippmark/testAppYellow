import React, { useState } from "react";
import "./JogsFilter.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Jogs() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  function startDateChangeHandler(
    date: Date | null,
    event: React.SyntheticEvent<any, Event> | undefined
  ) {
    setStartDate(date);
  }

  function endDateChangeHandler(
    date: Date | null,
    event: React.SyntheticEvent<any, Event> | undefined
  ) {
    setEndDate(date);
  }

  return (
    <React.Fragment>
      <div className="filter">
        <div className="filter__rowgroup">
          <label className="filter__label">Date from</label>
          <DatePicker
            value={!!startDate ? startDate.toLocaleDateString() : ""}
            onChange={startDateChangeHandler}
            className="filter__date"
          ></DatePicker>
        </div>
        <div className="filter__rowgroup">
          <label className="filter__label">Date to</label>
          <DatePicker
            value={!!endDate ? endDate.toLocaleDateString() : ""}
            onChange={endDateChangeHandler}
            className="filter__date"
          ></DatePicker>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Jogs;
