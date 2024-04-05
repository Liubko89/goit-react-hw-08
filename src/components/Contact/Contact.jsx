import { FaPhone } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contactName, contactNumber, contactId }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={css.contactWrapper}>
        <div className={css.contactInfo}>
          <IoIosContact className={css.contactIcon} />
          <p>{contactName}</p>
        </div>
        <div className={css.contactInfo}>
          <FaPhone />
          <span>{contactNumber}</span>
        </div>
      </div>
      <button
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContact(contactId))}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
