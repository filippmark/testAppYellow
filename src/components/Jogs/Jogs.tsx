import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import JogsFilter from "../JogsFilter/JogsFilter";
import AddJogBtn from "../AddJogBtn/AddJogBtn";
import "./Jogs.css";
import NewJog from "../NewJog/NewJog";
import { actionCreators } from "../../actions/jogs";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Modal from "react-modal";
import { Jog as JogType } from "../../types/jogs";
import { ApplicationState } from "../../reducers/";
import Jog from "../Jog/Jog";
import { createSelector } from "reselect";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "60%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    background: "none",
  },
};

const selectJogs = createSelector(
  (state: ApplicationState) => state.filter.isFilterEnabled,
  (state: ApplicationState) => state.filter.startDate,
  (state: ApplicationState) => state.filter.endDate,
  (state: ApplicationState) => state.jogs.jogs,
  (
    isFilterEnabled: boolean,
    startDate: Date | null,
    endDate: Date | null,
    jogs: JogType[]
  ) => {
    if (isFilterEnabled && (!!endDate || !!startDate)) {
      return jogs.filter((jog: JogType) => {
        return (
          (!!!startDate || jog.date - startDate.getTime() >= 0) &&
          (!!!endDate || endDate.getTime() - jog.date >= 0)
        );
      });
    } else {
      return jogs;
    }
  }
);

export default function Jogs() {
  const [isModalOpen, setIsOpen] = useState(false);
  const jogs: JogType[] = useSelector(selectJogs, shallowEqual);
  const isFilterEnabled: boolean = useSelector(
    (state: ApplicationState) => state.filter.isFilterEnabled
  );
  const isAuth: boolean = useSelector(
    (state: ApplicationState) => state.auth.isAuth
  );

  const dispatch = useDispatch();

  function updateModalWindowState(isOpen: boolean) {
    setIsOpen(isOpen);
  }

  useEffect(() => {
    console.log("----");
    dispatch(actionCreators.receiveJogs());
  }, [dispatch]);

  if (isAuth) {
    return (
      <div className="jogs-wrapper">
        {isFilterEnabled && <JogsFilter></JogsFilter>}
        <div className="jogs">
          {jogs.map((jog: JogType) => (
            <Jog key={jog.id} {...jog}></Jog>
          ))}
        </div>
        <AddJogBtn updateModal={updateModalWindowState}></AddJogBtn>
        <Modal isOpen={isModalOpen} style={customStyles}>
          <NewJog updateModal={updateModalWindowState}></NewJog>
        </Modal>
      </div>
    );
  } else {
    return <Redirect to="/let-in"></Redirect>;
  }
}
