import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";
// import {selectContacts} from '../../redux/contactsSlice'
// import {selectNameFilter} from '../../redux/filtersSlice'
import {selectFilteredContacts} from "../../redux/contactsSlice"

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectNameFilter);

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact            
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
}
