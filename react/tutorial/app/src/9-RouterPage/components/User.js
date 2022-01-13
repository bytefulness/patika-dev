import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function User() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      setUser(res.data);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>{user.name}</h1>
      <h3>Detail: User {id}</h3>
      <code>{JSON.stringify(user)}</code>

      <div style={{ marginTop: "3rem" }}>
        <button>
          <Link to={`/user/${+(id - 1)}`}>Previous</Link>
        </button>
        <button>
          <Link to={`/user/${+id + 1}`}>Next</Link>
        </button>
      </div>
    </>
  );
}

export default User;
