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

const kittenOne = `<li class="card js-kitten-one">
    <article>
      <img class="card_img" src=${kittenOneImage} alt="siames-cat"/>
      <h3 class="card_title">${kittenOneName.toUpperCase()}</h3>
      <h4 class="card_race">${kittenOneRace}</h4>
      <p class="card_description">${kittenOneDescription}</p>
    </article>
  </li>`;
const kittenTwo = `<li class="card js-kitten-two">
                    <img class="card_img" src=${kittenTwoImage} alt="sphynx-cat" />
                    <h3 class="card_title">${kittenTwoName.toUpperCase()}</h3>
                    <h4 class="card_race">${kittenTwoRace}</h4>
                    <p class="card_description">${kittenTwoDescription}</p>
                  </li>`;

const kittenThree = `<li class="card js-kitten-three">
                    <img class="card_img" src=${kittenThreeImage} alt="maine-coon-cat" />
                    <h3 class="card_title">${kittenThreeName.toUpperCase()}</h3>
                    <h4 class="card_race">${kittenThreeRace}</h4>
                    <p class="card_description">${kittenThreeDescription}</p>
                  </li>`;

kittenList.innerHTML = kittenOne + kittenTwo + kittenThree;

const btn = document.querySelector(".js-btn-add");
const form = document.querySelector(".js-new-form");
const formInputs = document.querySelector(".js-form");

btn.addEventListener("click", () => {
  form.classList.toggle("collapsed");
});

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
