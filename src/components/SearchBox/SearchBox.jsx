import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleSearch = (ev) => {
    dispatch(changeFilter(ev.target.value));
  };
  return (
    <label className={css.SearchBox}>
      <span>
        <b> Find contacts by name</b>
      </span>
      <input
        className={css.searchBoxInput}
        type="text"
        placeholder="Search for..."
        value={filter}
        onChange={handleSearch}
      />
    </label>
  );
};

export default SearchBox;
