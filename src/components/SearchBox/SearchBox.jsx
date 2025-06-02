import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { useId } from "react";

export default function SearchBox() {

  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();
  const searchByName = useId();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBoxContainer}>
      <label htmlFor={searchByName}>Find contacts by name</label>
      <input
        type="text"
        className={css.searchByName}
        id={searchByName}
        name="searchByName"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
