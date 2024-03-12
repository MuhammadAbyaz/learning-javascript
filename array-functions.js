const numbers = [1, 2, 3, 5, 6, 7, 8, 9, 12, 14, 56, 12];
numbers.forEach(function (n) {
  console.log(n * n);
});
const squares = numbers.map(function (n) {
  return n * n;
});
const cubes = numbers.map((n) => {
  return n ** 3;
});
const even = numbers.filter((n) => n % 2 === 0); // in filter the callback function must return true or false, it will add the value to the resultant array if the function returns true

// every and some
const colors = ["red", "green", "orange", "maroon", "olive"];
console.log(colors.every((c) => c.includes("r")));
console.log(colors.some((c) => c.includes("r")));
