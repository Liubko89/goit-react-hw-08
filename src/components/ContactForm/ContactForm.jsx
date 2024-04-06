import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Contact name must be at least 3 characters!")
    .max(50, "Contact name must be less than 50 characters!")
    .required("Contact name is required!"),
  number: Yup.string()
    .min(3, "Contact number must be at least 3 characters!")
    .max(50, "Contact number must be less than 50 characters!")
    .matches(
      /^[0-9-]+$/,
      "You are allowed to type only numbers and symbol - between numbers"
    )
    .required("Contact number is required!"),
});

const INITIAL_FORM_DATA = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (data, actions) => {
    dispatch(addContact(data));
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={ContactsSchema}
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
