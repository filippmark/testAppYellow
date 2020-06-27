import React from "react";
import { useDispatch, useSelector } from "react-redux";
import bearFace from "../../images/bear-face.svg";
import { actionCreators } from "../../actions/auth";
import "./LetIn.css";
import { ApplicationState } from "../../reducers";
import { Redirect } from "react-router-dom";
import useWindowSize from "../../hooks/windowSize";
import bearFacePurple from "../../images/bearFace.png";

function LetIn() {
  const isAuth: boolean = useSelector(
    (state: ApplicationState) => state.auth.isAuth
  );
  const size = useWindowSize();
  const dispatch = useDispatch();

  function handleLetIn(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    dispatch(actionCreators.getToken());
  }

  if (!isAuth) {
    return (
      <div className="let-in-wrapper">
        <div className="let-in">
          <div className="let-in__logo">
            <img
              className="let-in__logo-img"
              alt="bear"
              src={size.width! >= 544 ? bearFace : bearFacePurple}
            ></img>
          </div>
          <button className="let-in__btn" onClick={handleLetIn}>
            Let me in
          </button>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/"></Redirect>;
  }
}

export default LetIn;
