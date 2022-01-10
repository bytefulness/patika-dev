function User({ name, age, field, devTeam }) {
  return (
    <h1>
      {devTeam
        ? `Hello ${name} (${age}) you're in devTeam your field is ${field}`
        : `Sorry ${name} you have no access`}
    </h1>
  );
}

export default User;
