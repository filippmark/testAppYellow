import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import "./JogsFilter.css";
import { ApplicationState } from "../../reducers/";
import { actionCreators } from "../../actions/filter";

function Jogs() {
  const { startDate, endDate } = useSelector(
    (state: ApplicationState) => ({
      startDate: state.filter.startDate,
      endDate: state.filter.endDate,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  function startDateChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    if (!!event.target.value) {
      const date = new Date(event.target.value);
      date.setHours(0);
      dispatch(actionCreators.setStartDate(date));
    }
  }

  function endDateChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    if (!!event.target.value) {
      const date = new Date(event.target.value);
      date.setHours(0);
      dispatch(actionCreators.setEndDate(date));
    }
  }

  return (
    <React.Fragment>
      <div className="filter">
        <div className="filter__rowgroup filter__rowgroup-mobile">
          <label className="filter__label filter__label-mobile">
            Date from
          </label>
          <input
            type="date"
            value={!!startDate ? startDate.toISOString().split('T')[0] : ""}
            onChange={startDateChangeHandler}
            className="filter__date filter__date-mobile"
          ></input>
        </div>
        <div className="filter__rowgroup filter__rowgroup-mobile">
          <label className="filter__label filter__label-mobile">Date to</label>
          <input
            type="date"
            value={!!endDate ? endDate.toISOString().split('T')[0] : ""}
            onChange={endDateChangeHandler}
            className="filter__date filter__date-mobile"
          ></input>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Jogs;
