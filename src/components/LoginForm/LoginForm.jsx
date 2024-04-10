import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginSchema } from "../../services/yupSchemas";
import toast from "react-hot-toast";
import { successToast } from "../../services/toastStyles";

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
        toast.success("Loged in successfully!", {
          style: successToast,
        });
      })
      .catch(() => {
        toast.error("This didn't work. Try again");
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
          <span>Log In</span>
        </button>
      </Form>
    </Formik>
  );
};
