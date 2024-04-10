import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { contactsSchema } from "../../services/yupSchemas";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import toast, { Toaster } from "react-hot-toast";
import { styleToastMessage, successToast } from "../../services/toastStyles";

const INITIAL_FORM_DATA = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const handleSubmit = (data, actions) => {
    if (
      visibleContacts.some(
        (el) => el.name.trim().toLowerCase() === data.name.trim().toLowerCase()
      )
    ) {
      toast(`You already have a contact with name ${data.name}`, {
        duration: 3000,
        style: styleToastMessage,
      });
      return;
    } else if (
      visibleContacts.some((el) => el.number.trim() === data.number.trim())
    ) {
      toast(`You already have a contact with number ${data.number}`, {
        duration: 3000,
        style: styleToastMessage,
      });
      return;
    } else {
      dispatch(addContact(data));
      toast.success("Contact successfully added!", {
        style: successToast,
      });
    }
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={contactsSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>
          <span className={css.label}>Name</span>
          <Field
            className="input"
            type="text"
            name="name"
            placeholder="Enter contact name"
            autoComplete="off"
          />
          <ErrorMessage className="errorMsg" name="name" component="span" />
        </label>
        <label>
          <span className={css.label}>Phone</span>
          <Field
            className="input"
            type="text"
            name="number"
            placeholder="Enter contact number"
            autoComplete="off"
          />
          <ErrorMessage className="errorMsg" name="number" component="span" />
        </label>
        <button className={`${css.btn} button-64`} type="submit">
          <span>Add contact</span>
        </button>
        <Toaster position="top-center" reverseOrder={false} />
      </Form>
    </Formik>
  );
};

export default ContactForm;
