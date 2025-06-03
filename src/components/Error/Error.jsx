import css from "./Error.module.css";

export default function Error() {
  return (
    <div className={css.container}>
      <p className={css.errMessage}>Something went wrong, try again later!</p>
    </div>
  );
}