const headings = Array.from(document.querySelectorAll("h1"));

export const [heading1, heading2, heading3] = headings;

export const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  heading1.classList.add("newColor");
  setTimeout(() => {
    heading2.classList.add("newColor");
    setTimeout(() => {
      heading3.classList.add("newColor");
      console.log("hi");
    }, 3000);
  }, 3000);
});


