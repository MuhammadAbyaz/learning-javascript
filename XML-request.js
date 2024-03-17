const req = new XMLHttpRequest();
req.onload = function () {
  console.log("It loaded");
  const response = JSON.parse(this.responseText);
  console.log(response);
};
req.onerror = function () {
  console.log("Error");
  console.log(this.responseText);
};
req.open("GET", "https://swapi.dev/api/people/1");
req.send();
