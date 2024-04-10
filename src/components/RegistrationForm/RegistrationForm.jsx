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
        <label className={css.label}>
          <span>Username</span>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <ErrorMessage className="errorMsg" name="name" component="span" />
        </label>

        <label className={css.label}>
          <span>Email</span>
          <Field
            className={css.formInput}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage className="errorMsg" name="email" component="span" />
        </label>

        <label className={css.label}>
          <span>Password</span>
          <Field
            className={css.formInput}
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <ErrorMessage className="errorMsg" name="password" component="span" />
        </label>

        <button className={css.formBtn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};
