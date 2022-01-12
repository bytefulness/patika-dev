import { useState, useEffect } from "react";

function FetchingNative() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log(users);

  return (
    <>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}

export default FetchingNative;
