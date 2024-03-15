const user = {
  firstName: "Abyaz",
  lastName: "Khalid",
  age: 18,
  born: 2005,
};

function fullName({ firstName, lastName = "N/A" }) {
  return `${firstName} ${lastName}`;
}
