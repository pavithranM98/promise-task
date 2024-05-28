document.addEventListener("DOMContentLoaded", () => {
  fetchRandomUser();
  fetchDogImage();
  fetchCatFact();
});

// Fetch random user data
function fetchRandomUser() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => displayRandomUser(data))
    .catch((error) => console.error("Error fetching random user:", error));
}

// Display random user data
function displayRandomUser(data) {
  const user = data.results[0];
  const userDiv = document.getElementById("random-user");
  userDiv.innerHTML = `
        <img src="${user.picture.large}" alt="Random User" class="img-fluid mb-2">
        <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
        <p><strong>Email:</strong> ${user.email}</p>
    `;
}

// Fetch dog image
function fetchDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => displayDogImage(data))
    .catch((error) => console.error("Error fetching dog image:", error));
}

// Display dog image
function displayDogImage(data) {
  const dogImageDiv = document.getElementById("dog-image");
  dogImageDiv.innerHTML = `<img src="${data.message}" alt="Dog Image" class="img-fluid">`;
}

// Fetch cat fact
function fetchCatFact() {
  fetch("https://cat-fact.herokuapp.com/facts/random")
    .then((response) => response.json())
    .then((data) => displayCatFact(data))
    .catch((error) => console.error("Error fetching cat fact:", error));
}

// Display cat fact
function displayCatFact(data) {
  const catFactDiv = document.getElementById("cat-fact");
  catFactDiv.innerHTML = `<p>${data.text}</p>`;
}
