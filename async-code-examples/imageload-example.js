const headings = Array.from(document.querySelectorAll("h1"));
const [heading1, heading2, heading3] = headings;
const btn = document.querySelector("button");
const image = document.querySelector(".image-container");
const url = "https://picsum.photos/200/300";

btn.addEventListener("click", () => {
  loadImage(url)
    .then((val) => {
      image.append(val);
    })
    .catch((error) => {
      console.log(error);
    });
});

function loadImage(address) {
  return new Promise((resolved, rejected) => {
    let img = new Image();
    img.addEventListener("load", () => {
      resolved(img);
    });

    img.addEventListener("error", () => {
      rejected(new Error(`Failed to load image from: ${url}`));
    });

    img.src = url;
  });
}
