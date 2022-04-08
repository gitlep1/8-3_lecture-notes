const BASE_URL = "https://api.funtranslations.com/translate";
const MORSE_URL = `${BASE_URL}/morse?text=`;
const PIRATE_URL = `${BASE_URL}/pirate?text=`;

// const textToTranslate = document.querySelector(".textToTranslate");
const textToTranslate = document.createElement("textarea");
textToTranslate.classList.add("textToTranslate");

const translatedText = document.createElement("textarea");
translatedText.classList.add("translatedText");
let textToSend = "";

const morseButton = document.querySelector("#morseButton");
const morseSection = document.querySelector("#morseSection");
morseButton.addEventListener("click", (e) => {
  e.preventDefault();

  translateButton.style.display = "block";

  morseSection.style.display = "block";
  textToTranslate.value = "";
  translatedText.value = "";
  morseSection.append(textToTranslate, translatedText);
  pirateSection.style.display = "none";

  textToSend = MORSE_URL;
});

const pirateButton = document.querySelector("#pirateButton");
const pirateSection = document.querySelector("#pirateSection");
pirateButton.addEventListener("click", (e) => {
  e.preventDefault();

  translateButton.style.display = "block";

  morseSection.style.display = "none";
  pirateSection.style.display = "block";
  textToTranslate.value = "";
  translatedText.value = "";
  pirateSection.append(textToTranslate, translatedText);

  textToSend = PIRATE_URL;
});

const translateButton = document.querySelector("#translateButton");

translateButton.addEventListener("click", (e) => {
  e.preventDefault();

  textToSend += textToTranslate.value;

  // const data = { text: "how are you" };
  fetch(textToSend, {
    // method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    // body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.contents) {
        const { translated } = json.contents;
        textTranslation(translated);
      } else {
        errors(null, json.error);
      }
    })
    .catch((error) => {
      errors(error);
    });
});
morseSection.style.display = "none";
pirateSection.style.display = "none";
translateButton.style.display = "none";

const errors = (fetchError, jsonError) => {
  if (fetchError === null) {
    translatedText.value = `ERROR CODE: ${jsonError.code} \n ERROR MESSAGE: ${jsonError.message}`;
  } else {
    translatedText.value = fetchError;
  }
};

const textTranslation = (text) => {
  translatedText.value = "";
  translatedText.value = text;
};
