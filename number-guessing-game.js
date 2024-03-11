let maximum = parseInt(prompt("Enter your maximum number!"));
while (!maximum) {
  maximum = parseInt(prompt("Enter valid number!"));
}
const target = Math.floor(Math.random() * maximum) + 1;
let tries = 0;
let user_input = prompt("Enter your first guess");
if (user_input != "q") {
  while (parseInt(user_input) !== target) {
    if (user_input == "q") {
      break;
    } else if (user_input > target) {
      tries += 1;
      user_input = prompt("Guess is too high\tTry Again");
    } else if (user_input < target) {
      tries += 1;
      user_input = prompt("Guess is too low\tTry Again");
    }
  }
}
if (user_input !== "q") {
  console.log(
    `CONGRATS! You have guessed it right 🥳 and it took ${tries + 1} tries`
  );
} else {
  console.log("Exited");
}
