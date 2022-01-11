import PropTypes from "prop-types";

function User({ name, age, field, friends, devTeam, address }) {
  return (
    <>
      <h1>
        {devTeam
          ? `Hello ${name} (${age}) you're in devTeam your field is ${field}`
          : `Sorry ${name} you have no access`}
      </h1>

      <h3>{`Address: ${address.title}, Zip Code: ${address.zip}`}</h3>

      <ul>
        {friends.map((friend, id) => (
          <li key={id}>{friend}</li>
        ))}
      </ul>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  field: PropTypes.string,
  friends: PropTypes.array,
  devTeam: PropTypes.bool,

  // Define keys type of object prop.
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};

// Define default props
User.defaultProps = {
  name: "Yabanci",
  age: 20,
};

export default User;
