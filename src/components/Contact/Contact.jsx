import css from "./Contact.module.css";
import { BiSolidPhone } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactCard}>
      <ul className={css.contactList}>
        <li className={css.contactItem}>
          <BiSolidUser />
          <span>{name}</span>
        </li>
        <li className={css.contactItem}>
          <BiSolidPhone />
          <span>{number}</span>
        </li>
      </ul>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
