
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if (Math.random() < 0.2) {
        reject(new Error('Failed to feth user'));
      }


      resolve({firstName: 'Miguel', lastName: 'Ortega', age: 22});
    }, 2000);
  })
}

let output = document.createElement('div');
let btn = document.createElement('button');
btn.textContent = 'load user';
document.body.append(btn);

function renderUser(user) {
  output.innerHTML = `<p>firstName: ${user.firstName} </p>`
  document.body.append(output);
}


btn.addEventListener('click', async() => {
  let myUser = await getUser();

  try {
    renderUser(myUser);
    console.log('rendered user');
    

  } catch(error) {
    output.textContent = 'error'
    document.body.append(output);
    console.log('error:', error);
    
  }

})



