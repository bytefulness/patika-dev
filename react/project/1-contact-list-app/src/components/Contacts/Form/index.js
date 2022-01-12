import { useState, useEffect } from "react";

function Form({ addContact, contacts }) {
  const initialFormValues = { fullname: "", number: "" };
  const [person, setPerson] = useState(initialFormValues);

  useEffect(() => {
    setPerson(initialFormValues);
  }, [contacts]);

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // If input values is empty do nothing;
    if (!person.fullname && !person.number) return;

    addContact([...contacts, person]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="fullname">Fullname</label>
        <input
          id="fullname"
          type="text"
          name="fullname"
          placeholder="Erhan Akyel"
          value={person.fullname}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="number">Number</label>
        <input
          id="number"
          type="text"
          name="number"
          placeholder="0555 555 55 55"
          value={person.number}
          onChange={handleChange}
        />
      </div>

      <button>Add Person</button>
    </form>
  );
}

export default Form;
