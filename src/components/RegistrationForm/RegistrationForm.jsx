import { useDispatch } from "react-redux";
import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { registerSchema } from "../../services/yupSchemas";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  password: "",
};

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, actions) => {
    dispatch(register(data));
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={registerSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>
          <span className={css.label}>Username</span>
          <Field
            className="input"
            type="text"
            name="name"
            placeholder="Enter your name"
            autoComplete="off"
          />
          <ErrorMessage className="errorMsg" name="name" component="span" />
        </label>

        <label>
          <span className={css.label}>Email</span>
          <Field
            className="input"
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="off"
          />
          <ErrorMessage className="errorMsg" name="email" component="span" />
        </label>

        <label>
          <span className={css.label}>Password</span>
          <Field
            className="input"
            type="password"
            name="password"
            placeholder="Enter password"
            autoComplete="off"
          />
          <ErrorMessage className="errorMsg" name="password" component="span" />
        </label>

        <button className="button-64" type="submit">
          <span>Register</span>
        </button>
      </Form>
    </Formik>
  );
};
