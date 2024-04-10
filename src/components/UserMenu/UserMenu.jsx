import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="container">
      <p className={css.greeting}>Welcome, {user.name}</p>
      <button
        className={`${css.btn} button-64`}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <span>Logout</span>
      </button>
    </div>
  );
};
