const headings = Array.from(document.querySelectorAll("h1"));
const [heading1, heading2, heading3] = headings;
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let promise = addColor(1000, heading1, "red")
    .then(addColor(2000, heading2, "blue"))
    .then(addColor(3000, heading3, "purple"))
    .catch((err) => console.log(err));

  console.log(promise);
});

function addColor(time, element, color) {
  let promise = new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
      }, time);
      resolve();
    } else {
      reject(new Error(`element does not exist: ${element}`));
    }
  });
  return promise;
}
