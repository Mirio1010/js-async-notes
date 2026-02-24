// Main app.js - Demonstrates async user loading and rendering with Promises

// Simulates fetching a user asynchronously (with a chance of failure)
// Returns a Promise that resolves to a user object or rejects with an error
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 20% chance to simulate a fetch error
      if (Math.random() < 0.2) {
        reject(new Error("Failed to fetch user"));
      }
      // Otherwise, return a user object
      resolve({ firstName: "Miguel", lastName: "Ortega", age: 22 });
    }, 2000); // Simulate network delay
  });
}

// Create output container and button
let output = document.createElement("div");
let btn = document.createElement("button");
btn.textContent = "load user";
document.body.append(btn);

// Renders the user information to the page
function renderUser(user) {
  output.innerHTML = `<p>firstName: ${user.firstName} </p>`;
  document.body.append(output);
}

// Handle button click: fetch and render user, handle errors
btn.addEventListener("click", async () => {
  try {
    let myUser = await getUser();
    renderUser(myUser);
    console.log("rendered user");
  } catch (error) {
    output.textContent = "error";
    document.body.append(output);
    console.log("error:", error);
  }
});
