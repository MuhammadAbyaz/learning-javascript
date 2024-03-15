// spread operator

const cats = ["ellie", "billy", "pistachio"];
const dogs = ["tommy", "troy", "marshmellow"];
console.log(...cats);
console.log(...dogs);
const allPets = [...cats, ...dogs];
const person = {
  name: "Abyaz",
  age: 18,
  email: "abc@gmail.com",
};
const registerPerson = {
  ...person,
  isAdmin: false,
  alreadyRegistered: false,
};
console.log(registerPerson);

// rest operator
function sum(...nums) {
  // now I can pass as many args as I want
  // before this operator we use argument which didnt store data in array so we didnt have access to array methods
  return nums.reduce((total, curr) => total + curr);
}
