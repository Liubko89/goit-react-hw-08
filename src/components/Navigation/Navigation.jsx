import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";

const bildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="container">
      <nav className={css.nav}>
        <NavLink className={bildLinkClass} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={bildLinkClass} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};
