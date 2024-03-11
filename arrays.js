const rainbow = [
  "violet",
  "indigo",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
];
rainbow.push("white");
rainbow.push("black");
rainbow.pop();
rainbow.pop();
console.log(rainbow.slice(2));
rainbow.splice(1, 0, "black");
