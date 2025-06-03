import css from "./Loader.module.css";
import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className={css.loader}>
      <ClipLoader color="#8e82bd" size={50} />
    </div>
  );
}