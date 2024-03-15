const user = {
  firstName: "Abyaz",
  secondName: "Khalid",
  born: 2005,
  age: 18,
  city: "Karachi",
};

// here we have to specify the specific property name if we want to rename we have to do some thing else
const { email, firstName, secondName } = user;
console.log(email);
console.log(firstName);
console.log(secondName);

// this is how we rename property
const { email: userEmail, userName, userSecondName } = user;
// we can also add default values for our properties
const { someOneEmail, name, lastName, died = "N/A" } = user;
