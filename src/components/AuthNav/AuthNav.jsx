import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const bildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

export const AuthNav = () => {
  return (
    <div className={css.nav}>
      <NavLink className={bildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={bildLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
