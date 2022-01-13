import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Fetching Data...</h1>;
  }

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Users;
