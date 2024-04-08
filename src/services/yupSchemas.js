import * as Yup from "yup";

export const contactsSchema = Yup.object().shape({
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

export const loginSchema = Yup.object().shape({
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

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Register name must be at least 3 characters!")
    .max(50, "Register name must be less than 50 characters!")
    .required("Register name is required!"),
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
