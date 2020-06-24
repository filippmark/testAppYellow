import React, { useState, useEffect } from "react";
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

export default function Jogs() {
  const [isModalOpen, setIsOpen] = useState(false);
  const jogs: JogType[] = useSelector(
    (state: ApplicationState) => state.jogs.jogs,
    shallowEqual
  );
  const dispatch = useDispatch();

  function updateModalWindowState(isOpen: boolean) {
    setIsOpen(isOpen);
  }

  useEffect(() => {
    dispatch(actionCreators.receiveJogs());
  }, [dispatch]);

  return (
    <div className="jogs-wrapper">
      <JogsFilter></JogsFilter>
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
}
