const figlet = require("figlet");

figlet("Hello World", (err, data) => {
  if (err) {
    console.log("Something Went Wrong....");
    console.log(err);
    return;
  }
  console.log(data);
});
