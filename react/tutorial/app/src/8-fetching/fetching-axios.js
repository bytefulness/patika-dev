import { useState, useEffect } from "react";
import axios from "axios";

function FetchingAxios() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.data;
      })
      .then((data) => setUsers(data));
  }, []);

  console.log(users);

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
}

export default FetchingAxios;
