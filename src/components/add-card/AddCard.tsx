import { useState } from "react";
import Modal from "react-modal";

const AddCard = () => {
  // 1) boolean state for the modal:
  const [isOpen, setOpen] = useState(false);
  Modal.setAppElement("#root");

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="d-flex">
        <button onClick={openModal} className="btn btn-primary mx-auto">
          Add Card
        </button>
      </div>
      <Modal onRequestClose={closeModal} isOpen={isOpen}>
        Hi, Modal
      </Modal>
    </>
  );
};

export default AddCard;
