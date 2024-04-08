import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(15, 12, 12, 0.5)",
  },

  content: {
    height: "100hv",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ModalContact = ({ modalIsOpen, closeModal, children }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {children}
    </Modal>
  );
};

export default ModalContact;
