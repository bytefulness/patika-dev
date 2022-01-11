import { useState } from "react";

const data = [
  {
    id: 1,
    name: "Erhan",
    age: 25,
  },

  {
    id: 2,
    name: "Şükrü",
    age: 31,
  },
];

function ArrayState() {
  const [users, setUsers] = useState(data);

  const askData = () => {
    let id = users.length + 1;
    let name = prompt("What's name of the user?");
    let age = prompt("What's age of the user");

    return { id, name, age };
  };

  return (
    <>
      {users.map((item) => {
        const { id, name, age } = item;
        return (
          <ul key={id}>
            <li>{name}</li>
            <li>{age}</li>
          </ul>
        );
      })}

      <button onClick={() => setUsers([...users, askData()])}>
        Add New User
      </button>
    </>
  );
}

export default ArrayState;
