import React, { useState } from "react";
import JogsFilter from "../JogsFilter/JogsFilter";
import Jog from "../Jog/Jog";
import AddJogBtn from "../AddJogBtn/AddJogBtn";
import "./Jogs.css";
import NewJog from "../NewJog/NewJog";

import Modal from "react-modal";
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
    background: "none"
  },
};

export default function Jogs() {
  const [isModalOpen, setIsOpen] = useState(false);

  function updateModalWindowState(isOpen: boolean) {
    setIsOpen(isOpen);
  }

  return (
    <div className="jogs-wrapper">
      <JogsFilter></JogsFilter>
      <div className="jogs">
        <Jog></Jog>
        <Jog></Jog>
        <Jog></Jog>
      </div>
      <AddJogBtn updateModal={updateModalWindowState}></AddJogBtn>
      <Modal isOpen={isModalOpen} style={customStyles}>
        <NewJog updateModal={updateModalWindowState}></NewJog>
      </Modal>
    </div>
  );
}
