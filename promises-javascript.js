const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout");
    } else {
      success(`Here is your fake data from ${url}}`);
    }
  }, delay);
};

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

fakeRequestCallback(
  "books.com/page1",
  function (response) {
    console.log("It Worked!!");
    console.log(response);
    fakeRequestCallback(
      "books.com/page2",
      function (response) {
        console.log("It worked again");
        console.log(response);
      },
      function (err) {
        console.log("Error", err);
      }
    );
  },
  function (err) {
    console.log("Error occurred", err);
  }
);

// fakeRequestPromise("books.com/page1")
//   .then(() => {
//     fakeRequestPromise("books.com/page2")
//       .then(() => {
//         console.log("Worked Again");
//       })
//       .catch(() => {
//         console.log("Error in 2nd request");
//       });
//   })
//   .catch(() => {
//     console.log("OH NO, Error!");
//   });

fakeRequestPromise("books/page1")
  .then(() => {
    console.log("It Worked!!! (page1)");
    return fakeRequestPromise("books/page2");
  })
  .then(() => {
    console.log("It worked!! (page2)");
  })
  .catch(() => {
    console.log("A request failed");
  });

// creating promises
const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.backgroundColor = color;
      resolve();
    }, delay);
  });
};

delayedColorChange("red", 1000)
  .then(() => delayedColorChange("orange", 1000))
  .then(() => delayedColorChange("yellow", 1000))
  .then(() => delayedColorChange("green", 1000))
  .then(() => delayedColorChange("blue", 1000))
  .then(() => delayedColorChange("indigo", 1000))
  .then(() => delayedColorChange("violet", 1000));
