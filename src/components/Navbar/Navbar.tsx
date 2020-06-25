import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import logo from "../../images/logo.svg";
import filter from "../../images/filter.svg";
import filterActive from "../../images/filter-active.svg";
import "./Navbar.css";
import { ApplicationState } from "../../reducers";
import { actionCreators } from "../../actions/filter";

function Navbar() {
  const isFilterEnabled: boolean = useSelector(
    (state: ApplicationState) => state.filter.isFilterEnabled,
    shallowEqual
  );
  const dispatch = useDispatch();

  function handleActivateFilter(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) {
    isFilterEnabled
      ? dispatch(actionCreators.disableFilter())
      : dispatch(actionCreators.enableFilter());
  }

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <img src={logo} alt="logobear" className="nav__logo"></img>
        </li>
        <li className="nav__item nav__item_spacer"></li>
        <li className="nav__item"> JOGS </li>
        <li className="nav__item"> INFO </li>
        <li className="nav__item nav__item_contactus"> CONTACT US </li>
        <li
          className="nav__item nav__item_filter"
          onClick={handleActivateFilter}
        >
          <img
            src={isFilterEnabled ? filterActive : filter}
            alt="logobear"
            className="nav__filter"
          ></img>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
