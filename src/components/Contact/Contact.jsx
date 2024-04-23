import { FaPhone } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";
import ModalContact from "../ModalContact/ModalContact";
import EditContactForm from "../EditContactForm/EditContactForm";
import toast from "react-hot-toast";
import { successToast } from "../../services/toastStyles";

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
    toast.success("Contact successfully deleted", {
      style: successToast,
    });
    setShowModal(false);
  };

  return (
    <>
      <div className={css.contactInfoWrap}>
        <div className={css.contactInfo}>
          <IoIosContact className={css.contactIcon} />
          <p className={css.contactName}>{contactName}</p>
        </div>

        <a
          className={`${css.contactInfo} ${css.contactNumber}`}
          href={`tel:${contactNumber.replaceAll("-", "")}`}
        >
          <FaPhone className={css.faPhone} /> {contactNumber}
        </a>
      </div>
      <div className={css.btnWrapper}>
        <button
          className={`${css.deleteBtn} button-64`}
          onClick={handleShowDeleteModal}
        >
          <span>Delete</span>
        </button>
        <button
          className={`${css.editBtn} button-64`}
          onClick={handleShowEditModal}
        >
          <span>Edit</span>
        </button>
      </div>
      <ModalContact modalIsOpen={showModal} closeModal={handleCloseModal}>
        {showDelete && (
          <div className={css.deleteModal}>
            <b className={css.deleteModalText}>
              Do you really want to delete this contact?
            </b>
            <div className={css.btnWrapper}>
              <button
                className={`${css.deleteBtnModal} button-64`}
                onClick={handleDelete}
              >
                <span>Delete</span>
              </button>
              <button className="button-64" onClick={handleCloseModal}>
                <span>Cancel</span>
              </button>
            </div>
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
