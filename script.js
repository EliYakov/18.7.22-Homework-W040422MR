const inputsContainer = document.getElementById("input-container");

const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const countryInput = document.getElementById("country-input");

const favoriteColorInput = document.getElementById("fav-color-input");

const Card = document.getElementById("card-container");

function setFavoriteColorInput(color) {
  inputsContainer.style.backgroundColor = color;
}

function resetInputs() {
  favoriteColorInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
}

function setCardInputs(name, age) {
  Card.innerHTML = name + " (" + age + ")";
}

function setCardColor(color) {
  Card.style.backgroundColor = color;
}

function handleInputsSubmit() {
  setCardColor(favoriteColorInput.value);
  Card.innerHTML +=
    `  <div id="card-container" style="width: 18rem;">
        
  <div class="card-body">
    <h5 class="card-title">` +
    nameInput.value +
    `</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">` +
    ageInput.value +
    `</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>`;
}
