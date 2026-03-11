const button = document.querySelector('button');
const dogElement = document.querySelector('.dog');
async function getData() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const image = await response.json();

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`)
  }
  
  return image;
  
}


async function displayImage() {
  try {
    button.disabled = true;
      const obj = await getData();
      dogElement.src = obj.message;
  
  } catch (error) {
    
  } finally {
    button.disabled = false;
  }

}

button.addEventListener('click', () => {
  displayImage();
})



