import * as Yup from "yup";
import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "password must be at least 7 characters!")
    .max(50, "password must be less than 50 characters!")
    .required("password is required!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
      "Password must include a lowercase letter, an uppercase letter, and a number"
    ),
});

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, actions) => {
    dispatch(logIn(data))
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });

    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Email</span>
          <Field
            className={css.formInput}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage
            className={css.errorMsg}
            name="email"
            component="span"
          />
        </label>
        <label className={css.label}>
          <span>Password</span>
          <Field
            className={css.formInput}
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <ErrorMessage
            className={css.errorMsg}
            name="password"
            component="span"
          />
        </label>
        <button className={css.formBtn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};
