import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import filter from "../../images/filter.svg";
import filterActive from "../../images/filter-active.svg";
import "./Navbar.css";
import { ApplicationState } from "../../reducers";
import { actionCreators } from "../../actions/filter";
import useWindowSize from "../../hooks/windowSize";
import menu from "../../images/menu.png";
import Modal from "react-modal";
import modalLogo from "../../images/logo.png";
import cancel from "../../images/cancel-modal.svg";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "0",
    left: "0",
    padding: 0,
    border: "none",
    width: "100%",
    heigth: "100%",
  },
};

function Navbar() {
  const size = useWindowSize();
  const [isModalOpen, setModalState] = useState(false);

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

  function updateModalMenu(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setModalState(!isModalOpen);
  }

  function handleNavLinkClick(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) {
    setModalState(!isModalOpen);
  }

  return (
    <nav className="nav nav-mobile">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink exact to="/" className="nav__link">
            <img
              src={logo}
              alt="logobear"
              className="nav__logo nav__logo-mobile"
            ></img>
          </NavLink>
        </li>
        <li className="nav__item nav__item_spacer"></li>
        {isAuth && size.width! >= 544 && (
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
        {isAuth && size.width! < 544 && (
          <React.Fragment>
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
            <li className="nav__item">
              <button className="nav_menu" onClick={updateModalMenu}>
                <img src={menu} alt="menu" className="nav__menu-img"></img>
              </button>
            </li>
          </React.Fragment>
        )}
      </ul>
      <Modal
        overlayClassName="nav__modal"
        isOpen={isModalOpen}
        style={customStyles}
      >
        <div className="modal__head">
          <div className="modal__logo">
            <img
              className="modal_logo-img"
              src={modalLogo}
              alt="logo modal"
            ></img>
          </div>
          <div className="modal__spacer"></div>
          <button className="modal__close" onClick={updateModalMenu}>
            <img src={cancel} alt="close-modal"></img>
          </button>
        </div>
        <ul className="modal__list">
          <li className="modal__item" onClick={handleNavLinkClick}>
            <NavLink
              exact
              to="/"
              className="modal__link"
              activeClassName="modal__link-active"
            >
              JOGS
            </NavLink>
          </li>
          <li className="modal__item" onClick={handleNavLinkClick}>
            <NavLink
              to="/info"
              className="modal__link"
              activeClassName="modal__link-active"
            >
              INFO
            </NavLink>
          </li>
          <li className="modal__item" onClick={handleNavLinkClick}>
            <NavLink
              to="/contact-us"
              className="modal__link"
              activeClassName="modal__link-active"
            >
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </Modal>
    </nav>
  );
}

export default Navbar;
