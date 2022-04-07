// SOLUTION \\

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { id } = event.target;
  getPokemonByID(id.value);
  id.value = "";
});

function getPokemonByID(id) {
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((result) => {
      const pokemon = createPokemonArticle(result);
      document.querySelector(".pokemon").append(pokemon);
    })
    .catch((error) => {
      const message = createErrorMessage(error);
      document.querySelector("main").append(message);
    });
}

function createPokemonArticle(pokemon) {
  const article = document.createElement("article");
  article.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
    <h2>${pokemon.name} (#${pokemon.order})</h2>
  `;

  return article;
}

function createErrorMessage(message) {
  const section = document.createElement("section");
  section.classList.add("error");
  section.innerHTML = `
    <p>There was an error!</p>
    <p class="message">${message}</p>
  `;

  return section;
}

// MINE \\

// const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   getPokemonByID(pokeID);
// });

// const pokeID = document.querySelector("#pokemon-id");
// const error = document.querySelector(".error");
// const message = document.querySelector(".message");

// const getPokemonByID = (pokeID) => {
//   fetch(BASE_URL)
//     .then((res) => {
//       return res.json();
//     })
//     .then((json) => {
//       const pokeResult = json.results[pokeID.value - 1];
//       const { name } = pokeResult;
//       const pokeImg = document.createElement("img");
//       console.log(pokeResult);
//       // pokeImg.setAttribute("src", url);
//       // pokeImg.setAttribute("alt", name);
//       error.style.display = "none";
//       form.reset();
//     })
//     .catch(pokeError);
// };

// const pokeError = (e) => {
//   error.style.display = "block";
//   message.textContent = e;
// };
// const form = document.querySelector('form');

// // form.addEventListener('submit', (event) => {
// //   event.preventDefault();
// //   const { id } = event.target;
// //   getPokemonByID(id.value);
// //   id.value = '';
// // });
// //
// //
// //
// //
// // These notes are for reference
// // The full solution is commented out below on line 65
// // fetch api data
// fetch(BASE_URL + '/8')
//   // get json from the response body
//   .then((response) => {
//     return response.json();
//   })
//   // process json to dom updates
//   .then((json) => {
//     console.log(json);
//     // add a helper function to process the dom update
//   })
//   // catch errors
//   .catch((err) => {
//     console.log(err);
//     // add a helper function to process the dom update error msg
//   });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// function getPokemonByID(id) {
//   fetch(`${BASE_URL}/${3}`)
//     .then((response) => response.json())
//     .then((result) => {
//       const pokemon = createPokemonArticle(result);
//       document.querySelector('.pokemon').append(pokemon);
//     })
//     .catch((error) => {
//       const message = createErrorMessage(error);
//       document.querySelector('main').append(message);
//     });
// }

// function createPokemonArticle(pokemon) {
//   const article = document.createElement('article');
//   article.innerHTML = `
//     <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
//     <h2>${pokemon.name} (#${pokemon.order})</h2>
//   `;

//   return article;
// }

// function createErrorMessage(message) {
//   const section = document.createElement('section');
//   section.classList.add('error');
//   section.innerHTML = `
//     <p>There was an error!</p>
//     <p class="message">${message}</p>
//   `;

//   return section;
// }
