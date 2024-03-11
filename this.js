const cat = {
  name: "Blue",
  breed: "scottish fold",
  meow() {
    console.log(`${this.name} says MEOWWWWW`); // HERE this refers to the cat object
  },
};

const catMeow = cat.meow; // HERE this refers to the underlying main javascript window object
