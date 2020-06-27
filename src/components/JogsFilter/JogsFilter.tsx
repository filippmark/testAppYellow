import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import "./JogsFilter.css";
import DatePicker from "react-datepicker";
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

  function startDateChangeHandler(
    date: Date | null,
    event: React.SyntheticEvent<any, Event> | undefined
  ) {
    date?.setHours(0);
    dispatch(actionCreators.setStartDate(date));
  }

  function endDateChangeHandler(
    date: Date | null,
    event: React.SyntheticEvent<any, Event> | undefined
  ) {
    date?.setHours(0);
    dispatch(actionCreators.setEndDate(date));
  }

  return (
    <React.Fragment>
      <div className="filter">
        <div className="filter__rowgroup filter__rowgroup-mobile">
          <label className="filter__label filter__label-mobile">Date from</label>
          <DatePicker
            value={!!startDate ? startDate.toLocaleDateString() : ""}
            onChange={startDateChangeHandler}
            className="filter__date filter__date-mobile"
          ></DatePicker>
        </div>
        <div className="filter__rowgroup filter__rowgroup-mobile">
          <label className="filter__label filter__label-mobile">Date to</label>
          <DatePicker
            value={!!endDate ? endDate.toLocaleDateString() : ""}
            onChange={endDateChangeHandler}
            className="filter__date filter__date-mobile"
          ></DatePicker>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Jogs;
