import PropTypes from "prop-types";

function User({ name, age, field, friends, devTeam }) {
  return (
    <>
      <h1>
        {devTeam
          ? `Hello ${name} (${age}) you're in devTeam your field is ${field}`
          : `Sorry ${name} you have no access`}
      </h1>

      <ul>
        {friends.map((friend, id) => (
          <li key={id}>{friend}</li>
        ))}
      </ul>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  field: PropTypes.string,
  friends: PropTypes.array,
  devTeam: PropTypes.bool,
};

export default User;
