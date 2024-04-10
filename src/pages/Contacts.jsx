import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../components/DocumentTitle";
import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import { fetchContacts } from "../redux/contacts/operations";
import SearchBox from "../components/SearchBox/SearchBox";
import { selectError, selectIsLoading } from "../redux/contacts/selectors";
import Loader from "../components/Loader/Loader";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container mainContactForm">
      <DocumentTitle>Phonebook</DocumentTitle>

      <ContactForm />
      <SearchBox />

      {isLoading && !error && <Loader />}
      {error && (
        <b>
          There is a problem with the connection to the server, please try again
          later
        </b>
      )}
      <ContactList />
    </div>
  );
}
