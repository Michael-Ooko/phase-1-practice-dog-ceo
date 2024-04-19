// console.log('%c HI', 'color: firebrick')
// Function to fetch and display images of dogs
function fetchDogImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/10";

  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      const dogImageContainer = document.getElementById("dog-image-container");
      dogImageContainer.innerHTML = ""; // Clear previous images

      data.message.forEach(imageUrl => {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Dog";
        dogImageContainer.appendChild(img);
      });
    })
    .catch(error => {
      console.error("Error fetching dog images:", error);
    });
}

// Function to fetch and display dog breeds
function fetchDogBreeds() {
  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      const dogBreedsList = document.getElementById("dog-breeds");
      dogBreedsList.innerHTML = ""; // Clear previous breeds

      const breeds = Object.keys(data.message);
      breeds.forEach(breed => {
        const listItem = document.createElement("li");
        listItem.textContent = breed;
        dogBreedsList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error("Error fetching dog breeds:", error);
    });
}

// Function to filter dog breeds based on selected letter
function filterDogBreeds() {
  const breedDropdown = document.getElementById("breed-dropdown");
  const selectedLetter = breedDropdown.value;

  const dogBreedsList = document.getElementById("dog-breeds");
  const breeds = dogBreedsList.getElementsByTagName("li");

  for (let i = 0; i < breeds.length; i++) {
    const breed = breeds[i];
    if (breed.textContent.startsWith(selectedLetter)) {
      breed.style.display = "block"; // Show breed if starts with selected letter
    } else {
      breed.style.display = "none"; // Hide breed if doesn't start with selected letter
    }
  }
}
// Function to change font color when an li is clicked
function changeFontColor(event) {
  const li = event.target;
  const color = "blue"; // Change to your desired color
  li.style.color = color;
}

// Invoke functions when the page has loaded
window.addEventListener("load", function () {
  fetchDogImages();
  fetchDogBreeds();

  const breedDropdown = document.getElementById("breed-dropdown");
  breedDropdown.addEventListener("change", filterDogBreeds);

  const dogBreedsList = document.getElementById("dog-breeds");
  dogBreedsList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      changeFontColor(event);
    }
  });
});