import { useDispatch } from "react-redux";
import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";
import { useState } from "react";

export const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const credentials = {
      name: name,
      email: email,
      password: password,
    };

    dispatch(register(credentials));

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input
          autoComplete="off"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className={css.label}>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label className={css.label}>
        Password
        <input
          autoComplete="off"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
