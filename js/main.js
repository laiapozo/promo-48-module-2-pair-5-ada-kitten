"use strict";

const kittenList = document.querySelector(".js-list");

function renderKitten(kittenData) {
  kittenList.innerHTML += `
    <li class="card ${kittenData.clase}">
      <article>
        <img class="card_img" src=${kittenData.image} alt="cat"/>
        <h3 class="card_title">${kittenData.name.toUpperCase()}</h3>
        <h4 class="card_race">${kittenData.race}</h4>
        <p class="card_description">${kittenData.description}</p>
      </article>
    </li>
  `;
}

const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  race: 'Siamés',
  description: 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  clase: 'js-kitten-one'
};

const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  race: 'Sphynx',
  description: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño...hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  clase: 'js-kitten-two'
};

const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  race: 'Maine Coon',
  description: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  clase: 'js-kitten-three'
};

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];
console.log(kittenDataList);

renderKitten(kittenData_1);
renderKitten(kittenData_2);
renderKitten(kittenData_3);

console.log(kittenData_1);
console.log(kittenData_2);
console.log(kittenData_3);


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

// Buscador gato

const searchButton = document.querySelector(".js_button-search");
const input_search_desc = document.querySelector(".js_in_search_desc");

const kittenOneCard = document.querySelector(".js-kitten-one");
const kittenTwoCard = document.querySelector(".js-kitten-two");
const kittenThreeCard = document.querySelector(".js-kitten-three");

const filterKitten = (event) => {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;

  if (descrSearchText.length === 0) {
    kittenOneCard.classList.remove("collapsed");
    kittenTwoCard.classList.remove("collapsed");
    kittenThreeCard.classList.remove("collapsed");
  } else if (kittenData_1.description.includes(descrSearchText)) {
    kittenTwoCard.classList.add("collapsed");
    kittenThreeCard.classList.add("collapsed");
    kittenOneCard.classList.remove("collapsed");
  } else if (kittenData_2.description.includes(descrSearchText)) {
    kittenOneCard.classList.add("collapsed");
    kittenThreeCard.classList.add("collapsed");
    kittenTwoCard.classList.remove("collapsed");
  } else if (kittenData_3.description.includes(descrSearchText)) {
    kittenTwoCard.classList.add("collapsed");
    kittenOneCard.classList.add("collapsed");
    kittenThreeCard.classList.remove("collapsed");
  }
};

searchButton.addEventListener("click", filterKitten); 