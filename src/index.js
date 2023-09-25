import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const userInput = document.querySelector('textarea[name="user-input"]');
const wordCountLabel = document.querySelector('li.metric:nth-child(1)');
const characterCountLabel = document.querySelector('li.metric:nth-child(2)');
const charecterNoSpaceCount = document.querySelector('li.metric:nth-child(3)');
const numberCountLabel = document.querySelector('li.metric:nth-child(4)');
const numberSumLabel = document.querySelector('li.metric:nth-child(5)');
const wordLengthAverage = document.querySelector('li.metric:nth-child(6)');
const resetButton = document.getElementById("reset-button");

userInput.addEventListener("input", (event) => {
  const text = event.target.value;

  wordCountLabel.innerHTML =
    "Recuento de Palabras: " + analyzer.getWordCount(text);
  characterCountLabel.innerHTML =
    "Recuento de Caracteres: " + analyzer.getCharacterCount(text);
  charecterNoSpaceCount.innerHTML =
    "Recuento de Caracteres Sin Espacio: " +
    analyzer.getCharacterCountExcludingSpaces(text);
  numberCountLabel.innerHTML =
    "Recuento de Números: " + analyzer.getNumberCount(text);
  numberSumLabel.innerHTML =
    "Suma Total de Números: " + analyzer.getNumberSum(text);
  wordLengthAverage.innerHTML =
    "Longitud Promedio de Palabras: " + analyzer.getAverageWordLength(text);
});

resetButton.addEventListener("click", function (e) {
  e.preventDefault();
  location.reload();
});
