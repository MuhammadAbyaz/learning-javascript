const cat = {
  name: "Blue",
  breed: "scottish fold",
  meow() {
    console.log(`${this.name} says MEOWWWWW`); // HERE this refers to the cat object
  },
};

const catMeow = cat.meow; // HERE this refers to the underlying main javascript window object
const person = {
  firstName: "Abyaz",
  lastName: "Khalid",
  fullName: function () {
    // If we replace normal function with arrow function this key word refers to the scope of the function and not the object, so by default it refers to the window object of javascript
    return `${this.firstName} ${this.lastName}`;
  },
};
