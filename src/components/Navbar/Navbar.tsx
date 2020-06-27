import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import filter from "../../images/filter.svg";
import filterActive from "../../images/filter-active.svg";
import "./Navbar.css";
import { ApplicationState } from "../../reducers";
import { actionCreators } from "../../actions/filter";

function Navbar() {
  const isFilterEnabled: boolean = useSelector(
    (state: ApplicationState) => state.filter.isFilterEnabled
  );
  const isAuth: boolean = useSelector(
    (state: ApplicationState) => state.auth.isAuth
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
          <NavLink exact to="/" className="nav__link">
            <img src={logo} alt="logobear" className="nav__logo"></img>
          </NavLink>
        </li>
        <li className="nav__item nav__item_spacer"></li>
        {isAuth && (
          <React.Fragment>
            <li className="nav__item">
              <NavLink
                exact
                to="/"
                className="nav__link"
                activeClassName="nav__link-active"
              >
                JOGS
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/info"
                className="nav__link"
                activeClassName="nav__link-active"
              >
                INFO
              </NavLink>
            </li>
            <li className="nav__item nav__item_contactus">
              <NavLink
                to="/contact-us"
                className="nav__link"
                activeClassName="nav__link-active"
              >
                CONTACT US
              </NavLink>
            </li>
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
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
