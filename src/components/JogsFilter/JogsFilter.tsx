import React from "react";
import "./JogsFilter.css";

function Jogs() {
  return (
    <React.Fragment>
      <div className="filter">
        <div className="filter__rowgroup">
          <label className="filter__label">Date from</label>
          <input className="filter__date"></input>
        </div>
        <div className="filter__rowgroup">
          <label className="filter__label">Date to</label>
          <input className="filter__date"></input>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Jogs;
