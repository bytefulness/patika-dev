// React
import { useState, useEffect } from "react";

// Styles
import "./contacts.css";

// Components
import Form from "./Form";
import List from "./List";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Mehmet Yener", number: "0331 512 61 11" },
    { fullname: "Cengiz Namli", number: "0530 550 50 50" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <section id="contacts">
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </section>
  );
}

export default Contacts;
