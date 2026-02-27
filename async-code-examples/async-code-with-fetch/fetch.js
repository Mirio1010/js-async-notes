
const element = document.createElement("p");
const btn = document.querySelector("button");
const url = "./api/people.json";

btn.addEventListener("click", async () => {

    try {
       await asyncCode(url);
    } catch (error) {
      console.log(`something went wrong!`);
      
    }
   

 
});

async function asyncCode(url) {
  let data = await fetch(url);
  let json =  await data.json();
  console.log(json);
  
  
}



// function asyncCode(url) {
//   xhr.open("GET", url);
//   xhr.onreadystatechange = () => {
//     console.log(xhr);

//     if (xhr.readyState === 4 && xhr.status === 200) {

//       console.log(typeof xhr.responseText);
//       let parsedJSON = JSON.parse(xhr.responseText);
//       console.log(parsedJSON);
//       let element = document.createElement("ul");
//       let people = Array.from(parsedJSON);

//       people.forEach((person) => {
//         const li = document.createElement("li");
//         li.textContent = `My name is ${person.firstName} and I'm ${person.age} years old`;
//         element.append(li);
//       });

//       document.body.append(element);
//     } else {
//       console.log({
//         status: xhr.status,
//         text: xhr.statusText,
//       });
//     }
//   };
//   xhr.send();
// }
