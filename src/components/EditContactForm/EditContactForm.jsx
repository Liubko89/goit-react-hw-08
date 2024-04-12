import { useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./EditContactForm.module.css";
import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import { contactsSchema } from "../../services/yupSchemas";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import toast from "react-hot-toast";
import { styleToastMessage } from "../../services/toastStyles";

const EditContactForm = ({ contactId, handleCloseModal }) => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const { name, number } = visibleContacts.find((el) => el.id === contactId);
  const dispatch = useDispatch();

  const handleSubmit = (data, actions) => {
    const contactData = { ...data, id: contactId };

    if (
      visibleContacts
        .filter((el) => el.id !== contactId)
        .some(
          (el) =>
            el.name.trim().toLowerCase() ===
            contactData.name.trim().toLowerCase()
        )
    ) {
      toast(`You already have a contact with name ${contactData.name}`, {
        duration: 3000,
        style: styleToastMessage,
      });
      return;
    }

    if (
      visibleContacts
        .filter((el) => el.id !== contactId)
        .some((el) => el.number === contactData.number)
    ) {
      toast(`You already have a contact with number ${contactData.number}`, {
        duration: 3000,
        style: styleToastMessage,
      });
      return;
    }

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
          <div>
            <label>
              <span className={css.label}>Name</span>
              <Field
                className="input"
                type="text"
                name="name"
                autoComplete="off"
              />
              <ErrorMessage className="errorMsg" name="name" component="span" />
            </label>
            <label>
              <span className={css.label}>Number</span>
              <Field
                className="input"
                type="text"
                name="number"
                autoComplete="off"
              />
              <ErrorMessage
                className="errorMsg"
                name="number"
                component="span"
              />
            </label>
          </div>
          <div className={css.btnWrapper}>
            <button className="button-64" type="submit">
              <span>Ok</span>
            </button>
            <button className="button-64" onClick={() => handleCloseModal()}>
              <span>Cancel</span>
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default EditContactForm;
