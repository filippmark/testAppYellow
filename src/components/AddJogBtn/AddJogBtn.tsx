import React from "react";
import addNewIcon from "../../images/add.svg";
import "./AddJogBtn.css";

function AddJogBtn(props: { updateModal: (isOpen: boolean) => void }) {

    function showModal(event: React.MouseEvent<HTMLDivElement, MouseEvent>){
        props.updateModal(true);
    }

  return (
    <div className="add-jog add-jog_mobile" onClick={showModal}>
      <img className="add-jog__image" src={addNewIcon} alt="add new jog"></img>
    </div>
  );
}

export default AddJogBtn;
