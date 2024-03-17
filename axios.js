const { axios } = require("axios");
axios.get("https://swapi.dev/api/people/1/").then((res) => {
  console.log(res);
});

const getStarWarsPerson = async function (id) {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (e) {
    console.log("Some Error Occurred", e);
  }
};

const getDadJokes = async function () {
  try {
    const res = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    console.log(res.data.joke);
  } catch (e) {
    console.log("Some Error Occurred", e);
  }
};
