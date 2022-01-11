import { useState } from "react";

function Inputs() {
  const [person, setPerson] = useState({ name: "", surname: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setPerson({ ...person, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.surname && person.age) {
      setPeople([...people, person]);
      setPerson({ name: "", surname: "", age: "" });
    }
  };

  return (
    <>
      <form
        style={{
          width: "50%",
          marginInline: "auto",
          padding: "5rem",
          textAlign: "center",
        }}
      >
        <div>
          <label
            style={{ display: "block", marginBottom: "0.5rem" }}
            htmlFor="name"
          >
            Name:{" "}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={person.name}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label
            style={{ display: "block", marginBottom: "0.5rem" }}
            htmlFor="surname"
          >
            Surname:{" "}
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={person.surname}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label
            style={{ display: "block", marginBottom: "0.5rem" }}
            htmlFor="age"
          >
            Age:{" "}
          </label>
          <input
            type="text"
            id="age"
            name="age"
            value={person.age}
            onChange={handleChange}
          />
        </div>

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      <h1>{`${person.name} ${person.surname} ${person.age}`}</h1>

      <div>
        {people &&
          people.map((person, index) => {
            const { name, surname, age } = person;
            return <h3 key={index}>{`${name} ${surname} ${age}`}</h3>;
          })}
      </div>
    </>
  );
}

export default Inputs;
