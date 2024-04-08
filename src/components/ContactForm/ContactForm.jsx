import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { contactsSchema } from "../../services/yupSchemas";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

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
      console.log(`You already have a contact with name ${data.name}`);
      return;
    } else if (
      visibleContacts.some((el) => el.number.trim() === data.number.trim())
    ) {
      console.log(`You already have a contact with number ${data.number}`);
      return;
    } else {
      dispatch(addContact(data));
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
        <label className={css.formLabel}>
          <span>Name</span>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            placeholder="Enter contact name"
          />
          <ErrorMessage className={css.errorMsg} name="name" component="span" />
        </label>
        <label className={css.formLabel}>
          <span>Number</span>
          <Field
            className={css.formInput}
            type="text"
            name="number"
            placeholder="Enter contact number"
          />
          <ErrorMessage
            className={css.errorMsg}
            name="number"
            component="span"
          />
        </label>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
