import { useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./EditContactForm.module.css";
import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import { contactsSchema } from "../../services/yupSchemas";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const EditContactForm = ({ contactId, handleCloseModal }) => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const { name, number } = visibleContacts.find((el) => el.id === contactId);
  console.log(name, number);

  const dispatch = useDispatch();
  const handleSubmit = (data, actions) => {
    const contactData = { ...data, id: contactId };
    dispatch(editContact(contactData));
    actions.resetForm();
    handleCloseModal();
  };

  return (
    <>
      <Formik
        validationSchema={contactsSchema}
        initialValues={{
          name,
          number,
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.formLabel}>
            <span>Name</span>
            <Field className={css.formInput} type="text" name="name" />
            <ErrorMessage
              className={css.errorMsg}
              name="name"
              component="span"
            />
          </label>
          <label className={css.formLabel}>
            <span>Number</span>
            <Field className={css.formInput} type="text" name="number" />
            <ErrorMessage
              className={css.errorMsg}
              name="number"
              component="span"
            />
          </label>
          <button className={css.formBtn} type="submit">
            Change contact
          </button>
        </Form>
      </Formik>
      <button className={css.formBtn} onClick={() => handleCloseModal()}>
        Cancel
      </button>
    </>
  );
};

export default EditContactForm;
