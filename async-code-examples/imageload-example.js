// Example: Asynchronously loading an image using Promises
// This code demonstrates how to handle async operations (like image loading) in JavaScript
// using Promises and event listeners. Useful for understanding async patterns in the browser.

// Get references to DOM elements
const headings = Array.from(document.querySelectorAll("h1")); // All <h1> elements
const [heading1, heading2, heading3] = headings; // Destructure for possible use
const btn = document.querySelector("button"); // The button to trigger image load
const image = document.querySelector(".image-container"); // Where the image will be placed
const url = "https://picsum.photos/200/300"; // Image URL

// Add a click event listener to the button
btn.addEventListener("click", () => {
  // Call loadImage, which returns a Promise
  loadImage(url)
    .then((val) => {
      // If the image loads successfully, append it to the container
      image.append(val);
    })
    .catch((error) => {
      // If there is an error loading the image, log the error
      console.log(error);
    });
});

// Function to load an image asynchronously
// Returns a Promise that resolves with the image element if loaded, or rejects on error
function loadImage(address) {
  return new Promise((resolved, rejected) => {
    let img = new Image(); // Create a new <img> element
    // When the image loads, resolve the Promise
    img.addEventListener("load", () => {
      resolved(img);
    });

    // If the image fails to load, reject the Promise
    img.addEventListener("error", () => {
      rejected(new Error(`Failed to load image from: ${url}`));
    });

    // Start loading the image by setting the src
    img.src = url;
  });
}
