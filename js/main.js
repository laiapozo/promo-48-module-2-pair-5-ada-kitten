"use strict";

const kittenList = document.querySelector(".js-list");
const kittenOneImage = "https://dev.adalab.es/gato-siames.webp";
const kittenOneName = "Anastacio";
const kittenOneRace = "Siamés";
const kittenOneDescription = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente."
const kittenTwoImage = "https://dev.adalab.es/sphynx-gato.webp";
const kittenTwoName = "Fiona";
const kittenTwoRace = "Sphynx";
const kittenTwoDescription = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño...hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenThreeImage = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenThreeName = "Cielo";
const kittenThreeRace = "Maine Coon";
const kittenThreeDescription = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";

function renderKitten(url, desc, name, race) {
  return `<li class="card js-kitten-one">
    <article>
      <img class="card_img" src=${url} alt="siames-cat"/>
      <h3 class="card_title">${name.toUpperCase()}</h3>
      <h4 class="card_race">${race}</h4>
      <p class="card_description">${desc}</p>
    </article>
  </li>`;
}

const kittenOne = renderKitten(kittenOneImage, kittenOneDescription, kittenOneName, kittenOneRace);
const kittenTwo = renderKitten(kittenTwoImage, kittenTwoDescription, kittenTwoName, kittenTwoRace);
const kittenThree = renderKitten(kittenThreeImage, kittenThreeDescription, kittenThreeName, kittenThreeRace);

kittenList.innerHTML = kittenOne + kittenTwo + kittenThree;

// Mostrar u ocultar el formulario función

const btn = document.querySelector(".js-btn-add");
const form = document.querySelector(".js-new-form");
const formInputs = document.querySelector(".js-form");

function showHideCatForm () {
  form.classList.toggle("collapsed");
}

btn.addEventListener("click", showHideCatForm);

const btnCancel = document.querySelector(".js-btn-cancel");

btnCancel.addEventListener("click", () => {
  form.classList.add("collapsed");
  formInputs.reset();
});

const searchButton = document.querySelector(".js_button-search");
const input_search_desc = document.querySelector(".js_in_search_desc");
const kittenDesc1 =
  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
const kittenDesc2 =
  "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenDesc3 =
  "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
const kittenOneCard = document.querySelector(".js-kitten-one");
const kittenTwoCard = document.querySelector(".js-kitten-two");
const kittenThreeCard = document.querySelector(".js-kitten-three");

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;

  if (kittenDesc1.includes(descrSearchText)) {
    kittenTwoCard.classList.add("collapsed");
    kittenThreeCard.classList.add("collapsed");
    kittenOneCard.classList.remove("collapsed");
  } else if (kittenDesc2.includes(descrSearchText)) {
    kittenOneCard.classList.add("collapsed");
    kittenThreeCard.classList.add("collapsed");
    kittenTwoCard.classList.remove("collapsed");

  } else if (kittenDesc3.includes(descrSearchText)) {
    kittenTwoCard.classList.add("collapsed");
    kittenOneCard.classList.add("collapsed");
    kittenThreeCard.classList.remove("collapsed");
  }
});
