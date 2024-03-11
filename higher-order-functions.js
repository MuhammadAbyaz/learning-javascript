function callTwice(secondFunction) {
  secondFunction();
  secondFunction();
}

function greet() {
  console.log(`Hello`);
}

callTwice(greet);

function makeBetween(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}
makeBetween(5, 10)(8);
const maths = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  square: function (x) {
    return x ** 2;
  },
};
// shorthand
const math = {
  PI: 3.14259,
  add(x, y) {
    return x + y;
  },
  multiply(x, y) {
    return x * y;
  },
};
