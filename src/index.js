console.log('%c HI', 'color: firebrick')

// Function to fetch and display dog images
function fetchDogImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const dogImageContainer = document.getElementById("dog-image-container");

        // Iterate over each image URL in the response and create an image element
        data.message.forEach(imgUrl => {
          const img = document.createElement("img");
          img.src = imgUrl;
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

        // Store all dog breeds
        const allBreeds = Object.keys(data.message);

        // Iterate over each breed in the response and create a list item
        allBreeds.forEach(breed => {
          const listItem = document.createElement("li");
          listItem.textContent = breed;
          dogBreedsList.appendChild(listItem);
        });

        // Add event listener to the dropdown to filter breeds
        const breedDropdown = document.getElementById("breed-dropdown");
        breedDropdown.addEventListener("change", function () {
          const selectedLetter = this.value;
          const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));

          // Clear the existing list of breeds
          dogBreedsList.innerHTML = "";

          // Display filtered breeds
          filteredBreeds.forEach(breed => {
            const listItem = document.createElement("li");
            listItem.textContent = breed;
            dogBreedsList.appendChild(listItem);
          });
        });
      })
      .catch(error => {
        console.error("Error fetching dog breeds:", error);
      });
  }

  // Call the functions when the page has loaded
  window.addEventListener("load", function () {
    fetchDogImages();
    fetchDogBreeds();
  });