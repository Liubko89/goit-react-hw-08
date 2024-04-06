import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {visibleContacts &&
        Array.isArray(visibleContacts) &&
        visibleContacts.length > 0 &&
        visibleContacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={css.contactListItem}>
              <Contact
                contactName={name}
                contactNumber={number}
                contactId={id}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
