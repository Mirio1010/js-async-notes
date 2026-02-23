import { heading1, heading2, heading3, btn } from "./cb-example.js";

btn.addEventListener("click", () => {});

const promise = new Promise((resolved, reject) => {
  let value = true;

  if (value) {
    resolved([1, 2, 3, 4, 5]);
  } else {
    reject("there was an error");
  }
});

promise
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });
