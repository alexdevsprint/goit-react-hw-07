import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { useId } from "react";

import {selectNameFilter} from '../../redux/filtersSlice'
export default function SearchBox() {

  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const searchByName = useId();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
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
