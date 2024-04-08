import { FaPhone } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";
import ModalContact from "../ModalContact/ModalContact";
import EditContactForm from "../EditContactForm/EditContactForm";

const Contact = ({ contactName, contactNumber, contactId }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleShowDeleteModal = () => {
    setShowDelete(true);
    setShowModal(true);
  };
  const handleShowEditModal = () => {
    setShowEdit(true);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowDelete(false);
    setShowModal(false);
    setShowEdit(false);
  };

  const handleDelete = () => {
    dispatch(deleteContact(contactId));
    setShowModal(false);
  };

  return (
    <>
      <div className={css.contactWrapper}>
        <div className={css.contactInfo}>
          <p>{contactName}</p>
        </div>
        <div className={css.contactInfo}>
          <a href={`tel:${contactNumber.replaceAll("-", "")}`}>
            <FaPhone /> {contactNumber}
          </a>
        </div>
      </div>
      <div>
        <button className={css.deleteBtn} onClick={handleShowDeleteModal}>
          Delete
        </button>
        <button className={css.deleteBtn} onClick={handleShowEditModal}>
          <IoIosContact className={css.contactIcon} />
          Edit
        </button>
      </div>
      <ModalContact modalIsOpen={showModal} closeModal={handleCloseModal}>
        {showDelete && (
          <div>
            <b>Do you really want to delete this contact?</b>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleCloseModal}>Cancel</button>
          </div>
        )}
        {showEdit && (
          <EditContactForm
            contactId={contactId}
            handleCloseModal={handleCloseModal}
          />
        )}
      </ModalContact>
    </>
  );
};

export default Contact;
