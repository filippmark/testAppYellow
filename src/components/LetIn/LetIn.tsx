import React from "react";
import { useDispatch } from "react-redux";
import bearFace from "../../images/bear-face.svg";
import { actionCreators } from "../../actions/auth";
import "./LetIn.css";

function LetIn() {
  const dispatch = useDispatch();

  function handleLetIn(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    dispatch(actionCreators.getToken());
  }

  return (
    <div className="let-in-wrapper">
      <div className="let-in">
        <div className="let-in__logo">
          <img className="let-in__logo-img" alt="bear" src={bearFace}></img>
        </div>
        <button className="let-in__btn" onClick={handleLetIn}>
          {" "}
          Let me in{" "}
        </button>
      </div>
    </div>
  );
}

export default LetIn;
